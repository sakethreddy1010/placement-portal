package com.example.demo;

import java.util.List;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;	

@Controller
@CrossOrigin("*")
public class StudentController {

    @Autowired
    StudentRepository repo;

    // Student Registration
    @PostMapping("/register")
    public Student register(@RequestBody Student student){
        return repo.save(student);
    }

    // Student Login
    @PostMapping("/login")
    @ResponseBody
    public String login(@RequestParam String email, @RequestParam String password){

        Student s = repo.findByEmailAndPassword(email, password);

        if(s != null){
            return "success";
        } else {
            return "fail";
        }
    }

    // Get All Students (for Admin Dashboard)
    @GetMapping("/students")
    public List<Student> getStudents(){
        return repo.findAll();
    }
    @GetMapping("/countStudents")
    @ResponseBody
    public long countStudents(){
        return repo.count();
    }

}