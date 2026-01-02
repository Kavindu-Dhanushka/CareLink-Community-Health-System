package server.backend.utils.mails.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.backend.utils.mails.Emailotp.EmailOtp;

import java.util.Optional;

public interface EmailOtpRepository extends JpaRepository<EmailOtp, Long> {
    Optional<EmailOtp> findByEmailAndOtp(String email, String otp);
    void deleteByEmail(String email);
}

