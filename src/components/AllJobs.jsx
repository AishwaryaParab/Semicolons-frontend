import React, {useState, useEffect} from 'react';
import { Box, Typography } from '@mui/material';
import axios from "axios";
// import {job} from "../data/job";
import JobCard from './JobCard';
import CustomButton from './CustomButton';
import { Add } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import useEnhancedEffect from '@mui/material/utils/useEnhancedEffect';

const AllJobs = () => {
  const navigate = useNavigate();
  const [job, setJob] = useState([]);

  const handleJob = () => {
    navigate("/create-jd")
  }

  useEffect(() => {
    axios.get("http://localhost:5000/all-job-descriptions").then((res) => {
      // console.log(res.data);
      setJob(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  return (
    <Box
    mt={7}
  >
    <Box mt={2} sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <Typography fontSize={25} fontWeight={700} color="#342E39">Active Job Descriptions</Typography>
        <CustomButton
            icon={<Add />}
            fullWidth
            title="Add JD"
            backgroundColor="#F5AE45"
            color="#fcfcfc"
            handleClick={handleJob}
        />
    </Box>

    <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 4, alignItems: "center", justifyContent: "center"}}>
        {job.map((item) => {
            return <JobCard key={item._id} title={item.title} id={item._id} job_desc={item.content} assignedBy={item.assignee} />
        })}
    </Box>
  </Box>
  )
}

export default AllJobs