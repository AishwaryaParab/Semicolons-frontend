import React from 'react';
import { Box, Typography } from '@mui/material';
import {job} from "../data/job";
import JobCard from './JobCard';
import CustomButton from './CustomButton';
import { Add } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';

const AllJobs = () => {
  const navigate = useNavigate();

  const handleJob = () => {
    navigate("/create-jd")
  }

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
            return <JobCard key={item._id} id={item._id} job_desc={item.job_desc} assignedBy={item.assignedBy} />
        })}
    </Box>
  </Box>
  )
}

export default AllJobs