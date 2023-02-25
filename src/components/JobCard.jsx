import React from 'react';
import {Card, CardContent, Box, Typography} from "@mui/material";
import { Stack } from '@mui/system';
import {Link, useNavigate} from "react-router-dom"
import "../styles.css";

const JobCard = ({id, title, job_desc, assignedBy}) => {
  const navigate = useNavigate();

  return (
    <Card 
      sx={{
        maxWidth: "330px",
        height: "320px",
        padding: "10px",
        '&:hover': {
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
        },
        cursor: "pointer",
        textDecoration: "none",
        // border: "2px solid black",
        borderRadius: "12px",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
      elevation={0}

      onClick={() => {navigate(`/jobs/${id}`, {state: {id, title, job_desc, assignedBy}})}}
    >
      <CardContent sx={{
        display: "flex",
        flexDirection: "column",
        }}>
        <Stack direction="column" gap={0.5} alignItems="flex-start">
            <Typography fontSize={20} fontWeight={500} color="#342E39">{title}</Typography>
            <Typography fontSize={12} fontWeight={400} color="#342E39">#{id}</Typography>
            <Typography mt={2} fontSize={14} color="#808191">{job_desc.substring(1, 200)} <p className="read-more">...Read More</p></Typography>
            <Typography mt={2} fontSize={12} fontWeight={600} color="#F5AE45">Requested By: {assignedBy}</Typography>
        </Stack>        
      </CardContent>
    </Card>
  )
}

export default JobCard