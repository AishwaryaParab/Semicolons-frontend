import React from 'react';
import { Box } from '@mui/material';
import Sidenav from '../components/Sidenav';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import AllJobs from '../components/AllJobs';
import People from '../components/People';
import Profile from '../components/Profile';
import AddEmployee from '../components/AddEmployee';
import { useEffect } from 'react';
import Cookies from "universal-cookie";
import CreateJob from '../components/CreateJob';
import Job from '../components/Job';
import EmployeeDetails from '../components/EmployeeDetails';
import { EditRounded } from '@mui/icons-material';
import UpdateEmployee from '../components/UpdateEmployee';


const HomePage = () => {
  const navigate = useNavigate();

  const cookies = new Cookies();

  useEffect(() => {
    const hostUrl = window.location.href.split("/"); 

    const token = cookies.get("token");

    if(!token) {
      console.log("Inside not token")
      return navigate("/login")
    }

    if(hostUrl[hostUrl.length - 1] === "") {
      navigate("/dashboard");
    } 
  }, []);

  return (
    <div>
      <Box sx={{ display: "flex" }}>
          <Sidenav /> 
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/jobs" element={<AllJobs />} />
              <Route path="/people" element={<People />} />
              <Route path="/add-employee" element={<AddEmployee />} />
              <Route path="/create-jd" element={<CreateJob />} />
              <Route path="/jobs/:id" element={<Job />} />
              <Route path="/add" element={<AddEmployee />} />
              <Route path="/:id/details" element={<EmployeeDetails />} />
              <Route path="/:id/editDetails" element={<UpdateEmployee />} />
            </Routes>
          </Box>
        </Box>  
    </div>
  )
}

export default HomePage
