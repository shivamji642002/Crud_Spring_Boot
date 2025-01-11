package com.crud.shivam.repository;

import com.crud.shivam.modal.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    // Search employees by name
    Page<Employee> findByNameContaining(String name, Pageable pageable);

    // Filter employees by department
    Page<Employee> findByDepartment(String department, Pageable pageable);


}
