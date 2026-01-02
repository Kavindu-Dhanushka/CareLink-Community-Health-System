package server.backend.article.service;

import com.cloudinary.Cloudinary;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import server.backend.article.entity.HealthArticle;
import server.backend.article.repository.HealthArticleRepository;
import server.backend.dto.request.HealthArticleCreateDTO;
import server.backend.dto.response.HealthArticleResponseDTO;
import server.backend.doctor.entity.Doctor;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class HealthArticleService {

    private final HealthArticleRepository repository;
    private final Cloudinary cloudinary;

    /* ===============================
       CREATE
    ================================ */
    public HealthArticleResponseDTO createArticle(
            HealthArticleCreateDTO dto,
            Doctor doctor
    ) {
        String imageUrl = uploadImage(dto.getImage());

        HealthArticle article = HealthArticle.builder()
                .title(dto.getTitle())
                .content(dto.getContent())
                .category(dto.getCategory())
                .verifiedBy(dto.getVerifiedBy())
                .imageUrl(imageUrl)
                .doctor(doctor)
                .build();

        HealthArticle saved = repository.save(article);
        return mapToResponse(saved);
    }

    /* ===============================
       READ
    ================================ */
    public List<HealthArticleResponseDTO> getAll() {
        return repository.findAll()
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    public HealthArticleResponseDTO getById(Long id) {
        return repository.findById(id)
                .map(this::mapToResponse)
                .orElseThrow(() -> new RuntimeException("Health article not found"));
    }

    /* ===============================
       DELETE
    ================================ */
    public void delete(Long id) {
        if (!repository.existsById(id)) {
            throw new RuntimeException("Health article not found");
        }
        repository.deleteById(id);
    }

    /* ===============================
       HELPERS
    ================================ */
    private String uploadImage(MultipartFile file) {
        if (file == null || file.isEmpty()) {
            throw new RuntimeException("Image is required");
        }

        try {
            Map<?, ?> result = cloudinary.uploader().upload(
                    file.getBytes(),
                    Map.of("folder", "health_articles")
            );
            return result.get("secure_url").toString();
        } catch (Exception e) {
            throw new RuntimeException("Image upload failed", e);
        }
    }

    private HealthArticleResponseDTO mapToResponse(HealthArticle article) {
        return HealthArticleResponseDTO.builder()
                .id(article.getId())
                .title(article.getTitle())
                .content(article.getContent())
                .category(article.getCategory())
                .verifiedBy(article.getVerifiedBy())
                .imageUrl(article.getImageUrl())
                .doctorId(article.getDoctor().getId())
                .build();
    }
}