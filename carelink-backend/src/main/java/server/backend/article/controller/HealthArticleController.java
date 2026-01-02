package server.backend.article.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import server.backend.article.service.HealthArticleService;
import server.backend.dto.request.HealthArticleCreateDTO;
import server.backend.dto.response.HealthArticleResponseDTO;
import server.backend.doctor.entity.Doctor;

import java.util.List;

@RestController
@RequestMapping("/api/doctor")
@RequiredArgsConstructor
public class HealthArticleController {

    private final HealthArticleService service;

    /* ===============================
       CREATE (multipart/form-data)
    ================================ */
    // localhost:8080/api/doctor
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public HealthArticleResponseDTO create(
            @ModelAttribute HealthArticleCreateDTO dto
    ) {
        // TEMPORARY: replace with JWT-based doctor
        Doctor doctor = new Doctor();
        doctor.setId(1L); // MUST be Long

        return service.createArticle(dto, doctor);
    }

    /* ===============================
       GET ALL
    ================================ */
    // localhost:8080/api/doctor
    @GetMapping
    public List<HealthArticleResponseDTO> getAll() {
        return service.getAll();
    }

    /* ===============================
       GET BY ID
    ================================ */
    @GetMapping("/{id}")
    public HealthArticleResponseDTO getById(@PathVariable Long id) {
        return service.getById(id);
    }

    /* ===============================
       DELETE
    ================================ */
    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        service.delete(id);
        return "Health article deleted successfully";
    }
}