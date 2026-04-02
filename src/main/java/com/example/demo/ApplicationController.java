package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class ApplicationController {

    @Autowired
    ApplicationRepository repo;

    @PostMapping("/applyApplication") 
    public Application apply(@RequestBody Application application){
        return repo.save(application);
    }

    @GetMapping("/applications")
    public List<Application> getApplications(){
        return repo.findAll();
    }
    @GetMapping("/countApplications")
    @ResponseBody
    public long countApplications(){
    	return repo.count();
    }
}