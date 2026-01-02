package server.backend.medicalrecord.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import server.backend.medicalrecord.entity.MedicalRecord;
import server.backend.medicalrecord.repository.MedicalRecordRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MedicalRecordService {

    private final MedicalRecordRepository medicalRecordRepository;

    // Create or update a medical record
    public MedicalRecord save(MedicalRecord medicalRecord) {
        return medicalRecordRepository.save(medicalRecord);
    }

    // Get record by ID
    public MedicalRecord getById(Long id) {
        return medicalRecordRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Medical Record not found"));
    }

    // Get all records
    public List<MedicalRecord> getAll() {
        return medicalRecordRepository.findAll();
    }

    // Get records by patient ID
    public List<MedicalRecord> getByPatientId(Long patientId) {
        return medicalRecordRepository.findByPatient_Id(patientId);
    }

    // Delete record
    public void delete(Long id) {
        medicalRecordRepository.deleteById(id);
    }
}