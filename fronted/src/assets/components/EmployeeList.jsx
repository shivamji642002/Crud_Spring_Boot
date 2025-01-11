import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Modal, Button } from 'react-bootstrap';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize, setPageSize] = useState(4);
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [selectedEmployee, setSelectedEmployee] = useState(null); // Selected employee for editing
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [filter, setFilter] = useState({ department: '', designation: '' }); // State for filter options

  useEffect(() => {
    fetchEmployees();
  }, [currentPage, pageSize, searchTerm, filter]);

  const fetchEmployees = async () => {
    try {
      let url = `http://localhost:8080/api/employees/paged?page=${currentPage}&size=${pageSize}`;

      if (searchTerm) {
        url = `http://localhost:8080/api/employees/search?name=${searchTerm}&page=${currentPage}&size=${pageSize}`;
      }

      if (filter.department || filter.designation) {
        url = `http://localhost:8080/api/employees/filter?department=${filter.department}&designation=${filter.designation}&page=${currentPage}&size=${pageSize}`;
      }

      const response = await axios.get(url);
      setEmployees(response.data.content);
      setTotalPages(response.data.totalPages);
    } catch (err) {
      toast.error('Error fetching employees');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/employees/${id}`);
      toast.success('Employee deleted');
      fetchEmployees();  // Refresh list after deletion
    } catch (err) {
      toast.error('Error deleting employee');
    }
  };

  const handleUpdate = (employee) => {
    setSelectedEmployee(employee);
    setShowModal(true); // Show modal when user clicks the update button
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEmployee(null); // Reset selected employee when modal is closed
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/employees/${selectedEmployee.id}`, selectedEmployee);
      toast.success('Employee updated successfully');
      fetchEmployees(); // Refresh list after update
      handleCloseModal(); // Close the modal
    } catch (err) {
      toast.error('Error updating employee');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Employee List</h2>
      
     {/* Search Bar and Filter Dropdowns in a Single Row */}
<div className="row mb-3">
  {/* Search Bar */}
  <div className="col-md-4">
    <input
      type="text"
      className="form-control"
      placeholder="Search by name"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>

  {/* Filter by Department */}
  <div className="col-md-4">
    <select
      className="form-control"
      value={filter.department}
      onChange={(e) => setFilter({ ...filter, department: e.target.value })}
    >
      <option value="">Filter by Department</option>
      <option value="HR">HR</option>
      <option value="Engineering">Engineering</option>
      <option value="Sales">Sales</option>
      {/* Add more departments as required */}
    </select>
  </div>

  {/* Filter by Designation */}
  <div className="col-md-4">
    <select
      className="form-control"
      value={filter.designation}
      onChange={(e) => setFilter({ ...filter, designation: e.target.value })}
    >
      <option value="">Filter by Designation</option>
      <option value="Manager">Manager</option>
      <option value="Developer">Developer</option>
      <option value="Tester">Tester</option>
      {/* Add more designations as required */}
    </select>
  </div>
</div>


      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Joining Date</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.department}</td>
              <td>{employee.designation}</td>
              <td>{employee.joiningDate}</td>
              <td>{employee.salary}</td>
              <td>
                <button
                  onClick={() => handleUpdate(employee)}
                  className="btn btn-warning"
                  style={{ marginRight: '10px' }}
                >
                  Update
                </button>
                <button onClick={() => handleDelete(employee.id)} className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-between">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 0}
          className="btn btn-secondary"
        >
          Prev
        </button>
        <span>Page {currentPage + 1} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
          className="btn btn-secondary"
        >
          Next
        </button>
      </div>

      {/* Modal for updating employee */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEmployee && (
            <form onSubmit={handleSubmitUpdate}>
              <div className="mb-3">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={selectedEmployee.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={selectedEmployee.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label>Department</label>
                <input
                  type="text"
                  className="form-control"
                  name="department"
                  value={selectedEmployee.department}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label>Designation</label>
                <input
                  type="text"
                  className="form-control"
                  name="designation"
                  value={selectedEmployee.designation}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label>Joining Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="joiningDate"
                  value={selectedEmployee.joiningDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label>Salary</label>
                <input
                  type="number"
                  className="form-control"
                  name="salary"
                  value={selectedEmployee.salary}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Update Employee</button>
            </form>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EmployeeList;
