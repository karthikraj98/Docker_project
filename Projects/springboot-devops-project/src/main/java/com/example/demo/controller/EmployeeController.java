package com.example.demo.controller;

import com.example.demo.service.EmployeeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping
    public List<String> getEmployees() {
        return employeeService.getEmployees();
    }

    @PostMapping
    public String addEmployee(@RequestBody String name) {
        employeeService.addEmployee(name);
        return "Employee added: " + name;
    }

    @GetMapping("/health")
    public String health() {
        return "Application is running";
    }
}
