package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@CrossOrigin("*")
public class JobController {

@Autowired
JobRepository repo;

@Autowired
ApplicationRepository applicationRepo;

@PostMapping("/addJob")
public Job addJob(@RequestBody Job job){
    return repo.save(job);
}

@GetMapping("/jobs")
public List<Job> getJobs(){
    return repo.findAll();
}

// 👉 ADD HERE (below getJobs)
@GetMapping("/countJobs")
@ResponseBody
public long countJobs(){
    return repo.count();
}
@PostMapping("/apply")
public String applyJob(@RequestParam("studentId") Long studentId,
                       @RequestParam("jobId") Long jobId) {

    System.out.println("Student " + studentId + " applied for job " + jobId);

    Application app = new Application();
    app.setStudentId(studentId);
    app.setJobId(jobId);

    applicationRepo.save(app);

    return "Application Submitted Successfully";
}	

}