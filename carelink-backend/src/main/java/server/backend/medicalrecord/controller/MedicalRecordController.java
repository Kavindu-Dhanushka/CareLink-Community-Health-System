package server.backend.medicalrecord.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import server.backend.medicalrecord.entity.MedicalRecord;
import server.backend.medicalrecord.service.MedicalRecordService;

import java.util.List;

@RestController
@RequestMapping("/api/medical-records")
@RequiredArgsConstructor
public class MedicalRecordController {

    private final MedicalRecordService medicalRecordService;

    // CREATE
    // localhost:8080/api/medical-records
    @PostMapping
    public ResponseEntity<MedicalRecord> create(@RequestBody MedicalRecord medicalRecord) {
        return ResponseEntity.ok(medicalRecordService.save(medicalRecord));
    }

    // GET BY ID
    // localhost:8080/api/medical-records/{id}
    @GetMapping("/{id}")
    public ResponseEntity<MedicalRecord> getById(@PathVariable Long id) {
        return ResponseEntity.ok(medicalRecordService.getById(id));
    }

    // GET ALL
    //  localhost:8080/api/medical-records
    @GetMapping
    public ResponseEntity<List<MedicalRecord>> getAll() {
        return ResponseEntity.ok(medicalRecordService.getAll());
    }

    // GET BY PATIENT
    // localhost:8080/api/medical-records/patient/{patientId}
    @GetMapping("/patient/{patientId}")
    public ResponseEntity<List<MedicalRecord>> getByPatient(
            @PathVariable Long patientId
    ) {
        return ResponseEntity.ok(
                medicalRecordService.getByPatientId(patientId)
        );
    }

    // DELETE
    // localhost:8080/api/medical-records/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        medicalRecordService.delete(id);
        return ResponseEntity.noContent().build();
    }
}