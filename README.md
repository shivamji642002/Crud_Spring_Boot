# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# Employee Management System

## Overview

The **Employee Management System** is a full-stack application designed to manage employee records, providing functionality for adding, editing, deleting, searching, filtering, and paginating employee data. The backend is built with **Spring Boot** and **MySQL**, while the frontend is developed using **React**, **Vite**, **Bootstrap**, and **React-Toastify** for a responsive and user-friendly interface.

## Features

- **Employee CRUD Operations**: Add, edit, and delete employees.
- **Employee Search**: Search employees by name.
- **Employee Filtering**: Filter employees by department.
- **Pagination**: Display employees in paginated format with configurable records per page.
- **Validation**: Ensure required fields like name and email are validated on both client-side and server-side.
- **Error Handling**: Proper error handling for invalid inputs and server-side issues.
- **Responsive UI**: Built using **Bootstrap** for responsive layouts.

## Tech Stack

### Backend:
- **Spring Boot**: Framework for building the RESTful API.
- **MySQL**: Relational database to store employee data.
- **JPA (Hibernate)**: Used for interacting with the database.

### Frontend:
- **React**: Frontend framework.
- **Vite**: Build tool for fast development.
- **Bootstrap**: For responsive styling.
- **React-Toastify**: For displaying notifications.
- **React-Paginate**: For pagination.

## API Endpoints

### **1. Add a New Employee**
- **Method**: `POST`
- **Endpoint**: `/api/employees`
- **Purpose**: Adds a new employee record.

### **2. Update an Existing Employee**
- **Method**: `PUT`
- **Endpoint**: `/api/employees/{id}`
- **Purpose**: Updates an existing employee record by ID.

### **3. Delete an Employee**
- **Method**: `DELETE`
- **Endpoint**: `/api/employees/{id}`
- **Purpose**: Deletes an employee record by ID.

### **4. Get All Employees (Paginated)**
- **Method**: `GET`
- **Endpoint**: `/api/employees`
- **Query Parameters**:
  - `page` (int): Page number (default = 0).
  - `size` (int): Number of records per page (default = 10).
- **Purpose**: Fetches a paginated list of all employees.

### **5. Get an Employee by ID**
- **Method**: `GET`
- **Endpoint**: `/api/employees/{id}`
- **Purpose**: Fetches a single employee record by ID.

### **6. Search Employees by Name**
- **Method**: `GET`
- **Endpoint**: `/api/employees/search`
- **Query Parameters**:
  - `name` (string): Name of the employee to search for.
  - `page` (int): Page number (default = 0).
  - `size` (int): Number of records per page (default = 10).
- **Purpose**: Searches employees by name with pagination.

### **7. Filter Employees by Department**
- **Method**: `GET`
- **Endpoint**: `/api/employees/filter`
- **Query Parameters**:
  - `department` (string): Department to filter by.
  - `page` (int): Page number (default = 0).
  - `size` (int): Number of records per page (default = 10).
- **Purpose**: Filters employees by department with pagination.

---

## Project Structure

```plaintext
fronted/
├── public/
│   ├── index.html                    # Main HTML template
├── src/
│   ├── components/
│   │   ├── AddEditEmployee.jsx        # Form to add/edit employee
│   │   ├── EmployeeTable.jsx          # Table to display employees with pagination
│   │   ├── SearchFilter.jsx           # Search and filter options
│   ├── pages/
│   │   ├── EmployeePage.jsx           # Main page to integrate components
│   ├── services/
│   │   ├── employeeService.js         # API calls for employee CRUD, search, and filter
│   ├── App.jsx                        # App entry point
│   ├── main.jsx                       # React DOM rendering
│   ├── styles/
│   │   ├── styles.css                 # Custom CSS for styling (if needed)
├── package.json                       # Project dependencies
├── vite.config.js                     # Vite configuration
├── backend/
│   ├── src/
│   │   ├── controller/                # REST API controllers
│   │   ├── model/                     # Employee model
│   │   ├── repository/                # JPA repositories
│   │   ├── service/                   # Business logic and services
│   │   ├── EmployeeManagementApplication.java # Main Spring Boot application
│   ├── pom.xml                         # Maven dependencies
