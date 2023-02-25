import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidenav from "./components/Sidenav";
import Dashboard from "./components/Dashboard";
import { Box } from "@mui/material";
import AllJobs from "./components/AllJobs";
import People from "./components/People";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import AddEmployee from "./components/AddEmployee";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
    </div>
  );
};

export default App;
