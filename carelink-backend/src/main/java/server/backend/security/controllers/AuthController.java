package server.backend.security.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import server.backend.dto.request.LoginRequestDTO;
import server.backend.dto.request.OtpRequestDTO;
import server.backend.dto.request.RegisterRequestDTO;
import server.backend.security.service.AuthService;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    // localhost:8080/api/auth/register
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequestDTO request) {
        authService.register(request);
        return ResponseEntity.ok("OTP sent to email");
    }

    // localhost:8080/api/auth/verify-otp
    @PostMapping("/verify-otp")
    public ResponseEntity<?> verifyOtp(@RequestBody OtpRequestDTO request) {
        authService.verifyOtp(request);
        return ResponseEntity.ok("Email verified successfully");
    }

    // localhost:8080/api/auth/login
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequestDTO request) {

        String token = authService.login(request);

        return ResponseEntity.ok(
                Map.of(
                        "accessToken", token,
                        "tokenType", "Bearer"
                )
        );
    }

    // OPTIONAL (client deletes token itself)
    @PostMapping("/logout")
    public ResponseEntity<?> logout() {
        return ResponseEntity.ok("Logged out");
    }
}
