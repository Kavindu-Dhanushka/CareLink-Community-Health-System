package server.backend.utils.mails.service;

import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

@Slf4j
@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender mailSender;
    private final TemplateEngine templateEngine;

    public void sendOtpEmail(String to, String otp) {

        Context context = new Context();
        context.setVariable("otp", otp);

        String htmlContent =
                templateEngine.process("email/otp-verification", context);

        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper =
                    new MimeMessageHelper(message, true, "UTF-8");

            helper.setTo(to);
            helper.setSubject("CareLink - Email Verification");
            helper.setText(htmlContent, true);

            mailSender.send(message);

            log.info("OTP email sent successfully to {}", to);

        } catch (Exception e) {
            log.error("EMAIL SENDING FAILED", e);
            throw new RuntimeException(e.getMessage());
        }
    }
}
