package server.backend.dto.request;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
public class HealthArticleCreateDTO {

    private String title;
    private String content;
    private String category;
    private String verifiedBy;
    private MultipartFile image;
}