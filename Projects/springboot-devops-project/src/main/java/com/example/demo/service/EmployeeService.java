package com.example.demo.service;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeService {

    private final List<String> employees = new ArrayList<>();

    public List<String> getEmployees() {
        return employees;
    }

    public void addEmployee(String name) {
        employees.add(name);
    }
}
