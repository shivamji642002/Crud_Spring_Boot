package com.crud.shivam.service;


import com.crud.shivam.modal.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import com.crud.shivam.repository.EmployeeRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repository;

    public Employee saveEmployee(Employee employee) {
        return repository.save(employee);
    }

    public Employee updateEmployee(Long id, Employee employeeDetails) {
        Optional<Employee> optionalEmployee = repository.findById(id);
        if (optionalEmployee.isPresent()) {
            Employee employee = optionalEmployee.get();
            employee.setName(employeeDetails.getName());
            employee.setEmail(employeeDetails.getEmail());
            employee.setDepartment(employeeDetails.getDepartment());
            employee.setDesignation(employeeDetails.getDesignation());
            employee.setJoiningDate(employeeDetails.getJoiningDate());
            employee.setSalary(employeeDetails.getSalary());
            return repository.save(employee);
        }
        throw new RuntimeException("Employee not found");
    }

    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }

    public void deleteEmployee(Long id) {
        repository.deleteById(id);
    }

    public Page<Employee> searchByName(String name, Pageable pageable) {
        return repository.findByNameContaining(name, pageable);
    }

    public Page<Employee> filterByDepartment(String department, Pageable pageable) {
        return repository.findByDepartment(department, pageable);
    }

    public Employee getEmployeeById(Long id) {
        return repository.findById(id).orElseThrow(() -> new RuntimeException("Employee not found with id: " + id));
    }



}
