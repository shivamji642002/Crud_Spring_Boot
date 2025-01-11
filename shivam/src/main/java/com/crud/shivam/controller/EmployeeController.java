package com.crud.shivam.controller;

import com.crud.shivam.modal.Employee;
import com.crud.shivam.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

        import java.util.List;

@RestController
@RequestMapping("/api/employees")
 // Allow requests from the React frontend
public class EmployeeController {

    @Autowired
    private EmployeeService service;

    @PostMapping
    @CrossOrigin(origins = "http://localhost:5173")
    public Employee createEmployee(@RequestBody Employee employee) {
        return service.saveEmployee(employee);
    }

    @PutMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:5173")
    public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails) {
        return service.updateEmployee(id, employeeDetails);
    }

    @GetMapping
    @CrossOrigin(origins = "http://localhost:5173")
    public List<Employee> getAllEmployees() {
        return service.getAllEmployees();
    }

    @DeleteMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:5173")
    public void deleteEmployee(@PathVariable Long id) {
        service.deleteEmployee(id);
    }

    @GetMapping("/search")
    @CrossOrigin(origins = "http://localhost:5173")

    public Page<Employee> searchEmployees(@RequestParam String name,
                                          @RequestParam int page,
                                          @RequestParam int size) {
        return service.searchByName(name, PageRequest.of(page, size));
    }

    @GetMapping("/filter")
    @CrossOrigin(origins = "http://localhost:5173")

    public Page<Employee> filterEmployees(@RequestParam String department,
                                          @RequestParam int page,
                                          @RequestParam int size) {
        return service.filterByDepartment(department, PageRequest.of(page, size));
    }

    @GetMapping("/paged")
    @CrossOrigin(origins = "http://localhost:5173")

    public Page<Employee> getPaginatedEmployees(@RequestParam int page,
                                                @RequestParam int size) {
        return service.searchByName("", PageRequest.of(page, size)); // Empty search for full list
    }


    @ExceptionHandler(RuntimeException.class)
    public String handleException(RuntimeException e) {
        return e.getMessage();
    }
}
