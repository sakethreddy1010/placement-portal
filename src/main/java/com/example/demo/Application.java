package com.example.demo;

import jakarta.persistence.*;

@Entity
public class Application {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;

private Long studentId;
private Long jobId;

public Long getId() {
    return id;
}

public void setId(Long id) {
    this.id = id;
}

public Long getStudentId() {
    return studentId;
}

public void setStudentId(Long studentId) {
    this.studentId = studentId;
}

public Long getJobId() {
    return jobId;
}

public void setJobId(Long jobId) {
    this.jobId = jobId;
}

}	