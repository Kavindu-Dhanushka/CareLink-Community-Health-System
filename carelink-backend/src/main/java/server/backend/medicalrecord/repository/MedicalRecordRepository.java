package server.backend.medicalrecord.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import server.backend.medicalrecord.entity.MedicalRecord;

import java.util.List;

@Repository
public interface MedicalRecordRepository extends JpaRepository<MedicalRecord, Long> {

    // Get all records for a specific patient
    List<MedicalRecord> findByPatient_Id(Long patientId);

    // Get all records containing a disease keyword
    List<MedicalRecord> findByDiseaseContainingIgnoreCase(String disease);
}