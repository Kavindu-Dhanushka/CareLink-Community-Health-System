package server.backend.doctor.entity;

import server.backend.Appointment.entity.Appointment;
import server.backend.article.entity.HealthArticle;
import server.backend.medicalrecord.entity.MedicalRecord;
import server.backend.security.user.AppUser;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.util.Set;

@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(optional = false)
    @JoinColumn(name = "user_id", unique = true)
    private AppUser user;

    private String specialization;

    @OneToMany(mappedBy = "doctor")
    private List<Appointment> appointments;

    @OneToMany(mappedBy = "doctor")
    private List<HealthArticle> articles;

    private String name;

    private String phoneNumber;

    @Column(unique = true)
    private String email;

    private String ImageUrl;


    @ManyToMany
    @JoinTable(
            name = "doctor_medical_record",
            joinColumns = @JoinColumn(name = "doctor_id"),
            inverseJoinColumns = @JoinColumn(name = "medical_record_id")
    )
    private Set<MedicalRecord> accessibleRecords;
}
