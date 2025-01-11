import React, { useState } from 'react';
import AddEmployee from './assets/components/AddEmployee';
import EmployeeList from './assets/components/EmployeeList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [isEmployeeAdded, setIsEmployeeAdded] = useState(false);

  const handleAddEmployee = () => {
    setIsEmployeeAdded(!isEmployeeAdded);
  };

  return (
    <div>
      <ToastContainer />
      <AddEmployee onAddEmployee={handleAddEmployee} />
      <EmployeeList />
    </div>
  );
};

export default App;
