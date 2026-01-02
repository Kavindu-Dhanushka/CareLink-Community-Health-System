package server.backend.utils.mails;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import server.backend.utils.mails.service.EmailService;

@RestController
@RequestMapping("/test")
@RequiredArgsConstructor
public class MailTestController {

    private final EmailService emailService;

    // Test endpoint to send a test email
    // localhost:8080/test/mail
    @GetMapping("/mail")
    public String testMail() {
        emailService.sendOtpEmail("lakruwansharakanishshanka@gmail.com", "123456");
        return "Mail sent";
    }
}
