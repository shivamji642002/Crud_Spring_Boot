# How to run the project 
## Fronted 
# 1 poen vs code
# 2 terminal git clone https://github.com/shivamji642002/Crud_Spring_Boot.git
# 3 cd Crud_Spring_Boot
# 4 cd fronted 
# 5 npm install
# 6 npm run dev
fronted run on the web this url like  http://localhost:5173/
## Backend
# Need a java jdk 23 and and mysql sofrware 
# 1 poen vs code shivam directory
# 2 open the appliction.properties
- spring.application.name=shivam
# create a database in mysql employee_management
- spring.datasource.url=jdbc:mysql://localhost:3306/employee_management
- spring.datasource.username=root
- spring.datasource.password=ji642002
- spring.jpa.hibernate.ddl-auto=update
- spring.jpa.show-sql=true
# hence you change a username and password you need to change in the application.properties file 
# 3 open the ShivamApplication.java file
# 4 run the application

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
d
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
- **Method**: `GET`  `http://localhost:8080/api/employees/filter?department=IT&page=0&size=10
`
- **Endpoint**: `/api/employees/filter` `http://localhost:8080/api/employees?page=0&size=10
`
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
