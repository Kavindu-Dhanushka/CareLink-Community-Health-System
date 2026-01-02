package server.backend.security.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import server.backend.dto.request.*;
import server.backend.security.jwt.JwtUtil;
import server.backend.security.repository.UserRepository;
import server.backend.security.user.AppUser;
import server.backend.utils.exception.EmailAlreadyExistsException;
import server.backend.utils.mails.Emailotp.EmailOtp;
import server.backend.utils.mails.Repository.EmailOtpRepository;
import server.backend.utils.mails.service.EmailService;

import java.time.LocalDateTime;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final EmailOtpRepository otpRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    private final EmailService emailService;

    // =====================
    // REGISTER + SEND OTP
    // =====================
    @Transactional
    public void register(RegisterRequestDTO request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new EmailAlreadyExistsException("Email already registered");
        }

        AppUser user = AppUser.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(request.getRole())
                .enabled(false)
                .build();

        userRepository.save(user);

        String otp = String.valueOf(100000 + new Random().nextInt(900000));

        otpRepository.deleteByEmail(request.getEmail());

        otpRepository.save(
                EmailOtp.builder()
                        .email(request.getEmail())
                        .otp(otp)
                        .expiryTime(LocalDateTime.now().plusMinutes(5))
                        .build()
        );

        emailService.sendOtpEmail(request.getEmail(), otp);
    }

    // =====================
    // VERIFY OTP
    // =====================
    @Transactional
    public void verifyOtp(OtpRequestDTO request) {

        EmailOtp otp = otpRepository
                .findByEmailAndOtp(request.getEmail(), request.getOtp())
                .orElseThrow(() -> new RuntimeException("Invalid OTP"));

        if (otp.getExpiryTime().isBefore(LocalDateTime.now())) {
            throw new RuntimeException("OTP expired");
        }

        AppUser user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        user.setEnabled(true);
        userRepository.save(user);

        otpRepository.deleteByEmail(request.getEmail());
    }

    // =====================
    // LOGIN → JWT (HEADER)
    // =====================
    public String login(LoginRequestDTO request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        AppUser user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!user.isEnabled()) {
            throw new RuntimeException("Email not verified");
        }

        return jwtUtil.generateToken(
                user.getEmail(),
                user.getRole().name()
        );
    }
}
