package server.backend.article.entity;


import jakarta.persistence.*;
import lombok.*;
import server.backend.doctor.entity.Doctor;

import jakarta.persistence.*;
import lombok.*;
import server.backend.doctor.entity.Doctor;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class HealthArticle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(columnDefinition = "TEXT")
    private String content;

    private String category;
    private String verifiedBy;

    private String imageUrl;

    @ManyToOne
    @JoinColumn(name = "doctor_id", nullable = false)
    private Doctor doctor;
}