import React, { useState } from 'react'; 
import axios from 'axios';
import { toast } from 'react-toastify';

const AddEmployee = ({ onAddEmployee }) => {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    department: '',
    designation: '',
    joiningDate: '',
    salary: '',
  });

  // Define possible departments and designations
  const departments = ['HR', 'Engineering', 'Sales', 'Marketing'];  // Example departments
  const designations = ['Manager', 'Developer', 'Tester', 'Designer'];  // Example designations

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/employees', employee);
      toast.success('Employee added successfully!');
      setEmployee({
        name: '',
        email: '',
        department: '',
        designation: '',
        joiningDate: '',
        salary: '',
      });
      onAddEmployee();  // Refresh employee list after adding a new employee
    } catch (err) {
      toast.error('Error adding employee');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        {/* Row 1: Name, Email, and Department */}
        <div className="row mb-3">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              name="name"
              value={employee.name}
              onChange={handleChange}
              placeholder="Employee Name"
              required
            />
          </div>
          <div className="col-md-4">
            <input
              type="email"
              className="form-control"
              name="email"
              value={employee.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="col-md-4">
            {/* Department Dropdown with Icon */}
            <div className="input-group">
              <select
                className="form-control"
                name="department"
                value={employee.department}
                onChange={handleChange}
                required
              >
                <option value="">Select Department</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
              <span className="input-group-text">
                <i className="bi bi-chevron-down"></i> {/* Bootstrap Icon for dropdown */}
              </span>
            </div>
          </div>
        </div>

        {/* Row 2: Designation, Joining Date, and Salary */}
        <div className="row mb-3">
          <div className="col-md-4">
            {/* Designation Dropdown with Icon */}
            <div className="input-group">
              <select
                className="form-control"
                name="designation"
                value={employee.designation}
                onChange={handleChange}
                required
              >
                <option value="">Select Designation</option>
                {designations.map((desig) => (
                  <option key={desig} value={desig}>
                    {desig}
                  </option>
                ))}
              </select>
              <span className="input-group-text">
                <i className="bi bi-chevron-down"></i> {/* Bootstrap Icon for dropdown */}
              </span>
            </div>
          </div>
          <div className="col-md-4">
            <input
              type="date"
              className="form-control"
              name="joiningDate"
              value={employee.joiningDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4">
            <input
              type="number"
              className="form-control"
              name="salary"
              value={employee.salary}
              onChange={handleChange}
              placeholder="Salary"
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
