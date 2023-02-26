import React, {useState} from "react";
import { Box, Typography } from "@mui/material";
import "./PeopleCard.css";
import { useLocation, useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import { useEffect } from "react";
import axios from "axios";
import SkillDistribution from "../graphs/SkillDistribution";

const EmployeeDetails = () => {
  const { state } = useLocation();

  const nameString = state.employee.name;
  const empId = state.employee.empId;
  const jobTitle = state.employee.jobTitle;
  const BU = state.employee.BU;
  const email = state.employee.email;

  const name = nameString.split(" ");
  const navigate = useNavigate();

  const handleEditEmployee = () => {
    navigate(`/${empId}/editDetails`, {state: {empId}});
  }

  const [domains, setDomains] = useState([]);
  let labels = [];
  let series = [];

  useEffect(() => {
    axios.get(`http://localhost:5000/employee/get-tech-domain/${empId}`).then((res) => {
      // console.log(res.data);
      setDomains(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <Box mt={7}>
      <Box sx={{display: "flex", flexWrap: "wrap", alignContent: "center", justifyContent: "space-between"}} >
      <Box
        sx={{
          margin: "20px 20px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          width: "40%",
          padding: "20px",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          borderRadius: "12px"
        }}

      >
        <Box>
          <p className="people-card-avatar">
            {name[0][0]} {name[name.length - 1][0]}
          </p>
          <p className="people-card-name">{nameString}</p>
          <p className="people-card-bu">{BU}</p>
        </Box>

        <Box sx={{ marginRight: "20px" }}>
          <Typography fontSize={14} fontWeight={800} color="#342E39">
            Employee ID: {empId}
          </Typography>
          <p className="people-card-job-title">{jobTitle}</p>
          <p className="people-card-email">{email}</p>

          <Box sx={{marginTop: "30px"}}>
      <CustomButton
        fullWidth
        type="submit"
        title="Edit Employee"
        backgroundColor="#F5AE45"
        color="#fcfcfc"
        handleClick={handleEditEmployee}
      />
      </Box>
        </Box>

        

    
      </Box>

      <Box className="skills-dist" style={{width: "500px"}}>
      <Typography fontSize={20} fontWeight={700} color="#342E39" sx={{textAlign: "center", margin: "20px 0"}}>
                Skill Distribution
              </Typography>
        {domains.map((item) => {
            labels.push(item.name);
            series.push(item.count);
        })}

        <SkillDistribution series={series} labels={labels} />
      </Box>


      </Box>
      

      

      
      
    </Box>
  );
};

export default EmployeeDetails;
