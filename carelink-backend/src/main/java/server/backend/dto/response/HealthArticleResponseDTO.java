package server.backend.dto.response;

import lombok.Builder;
import lombok.Getter;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class HealthArticleResponseDTO {

    private Long id;
    private String title;
    private String content;
    private String category;
    private String verifiedBy;
    private String imageUrl;
    private Long doctorId;
}
