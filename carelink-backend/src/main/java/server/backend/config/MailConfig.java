package server.backend.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import java.util.Properties;

@Configuration
@RequiredArgsConstructor
public class MailConfig {

    private final Environment env;

    @Bean
    public JavaMailSender javaMailSender() {

        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();

        // Required properties (fail fast if missing)
        mailSender.setHost(env.getRequiredProperty("spring.mail.host"));
        mailSender.setPort(
                Integer.parseInt(env.getRequiredProperty("spring.mail.port")));
        mailSender.setUsername(env.getRequiredProperty("spring.mail.username"));
        mailSender.setPassword(env.getRequiredProperty("spring.mail.password"));

        Properties props = mailSender.getJavaMailProperties();

        // Safe defaults (no null values)
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.auth",
                env.getProperty("spring.mail.properties.mail.smtp.auth", "true"));
        props.put("mail.smtp.starttls.enable",
                env.getProperty("spring.mail.properties.mail.smtp.starttls.enable", "true"));
        props.put("mail.smtp.starttls.required",
                env.getProperty("spring.mail.properties.mail.smtp.starttls.required", "true"));

        // DEV TLS bypass
        props.put("mail.smtp.ssl.trust",
                env.getProperty("spring.mail.properties.mail.smtp.ssl.trust"));
        props.put("mail.smtp.ssl.checkserveridentity",
                env.getProperty("spring.mail.properties.mail.smtp.ssl.checkserveridentity", "false"));

        // Timeouts
        props.put("mail.smtp.connectiontimeout",
                env.getProperty("spring.mail.properties.mail.smtp.connectiontimeout", "5000"));
        props.put("mail.smtp.timeout",
                env.getProperty("spring.mail.properties.mail.smtp.timeout", "5000"));
        props.put("mail.smtp.writetimeout",
                env.getProperty("spring.mail.properties.mail.smtp.writetimeout", "5000"));

        return mailSender;
    }
}
