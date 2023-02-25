import React from 'react';
import { Typography, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import CustomButton from './CustomButton';

const Job = () => {
  const {state} = useLocation();

  return (
    <Box
    mt={7}
  >
    <Box mt={2}>
        <Typography fontSize={25} fontWeight={700} color="#342E39">JD Id: <span style={{color: "#F5AE45"}}>#{state.id}</span></Typography>
        <Typography mt={4} fontSize={25} fontWeight={700} color="#342E39">Job Description: </Typography>
        <Typography mt={2} fontSize={14} color="#808191" sx={{width: "70%"}}>{state.job_desc}</Typography>
        <Typography mt={4} fontSize={25} fontWeight={700} color="#342E39">Assigned By: </Typography>
        <Typography mb={6} mt={2} fontSize={14} fontWeight={600} color="#808191">{state.assignedBy}</Typography>

        <CustomButton
            // icon={<Add />}
            fullWidth
            title="Match Employees"
            backgroundColor="#F5AE45"
            color="#fcfcfc"
            // handleClick={handleJob}
        />
    </Box>
  </Box>
  )
}

export default Job