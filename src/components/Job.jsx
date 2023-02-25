import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import CustomButton from './CustomButton';
import EmployeeTable from './EmployeeTable';
const Job = () => {
  const {state} = useLocation();
  const [showMatchingEmp, setSshowMatchingEmp] = useState(false);
  const handleJob = () =>{
 setSshowMatchingEmp(true)
  }

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
            handleClick={handleJob}
        />
    </Box>
    {showMatchingEmp?<EmployeeTable jdId={state.id}/>:null} 
  </Box>
  )
}

export default Job