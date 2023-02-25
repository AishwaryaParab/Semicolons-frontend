import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

const Profile = () => {
  return (
    <Box
      mt={7}
      sx={{padding: "10px"}}
    >
        <Stack direction="column">
            <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <Box sx={{width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "grey"}}>

                </Box>

                <Box>
                    <Typography fontSize={14} color="#342E39">Software Engineer</Typography>
                    <Typography fontSize={14} color="#342E39">60351</Typography>
                </Box>
            </Box>
        
            <Box sx={{marginTop: "10px"}}>
            <h3 style={{color: "#342E39"}}>Sridhar Maskeri</h3>
            <div style={{width:"70px", height:"5px", backgroundColor: "#F5AE45", marginTop: "5px", borderRadius: "4px"}}></div>
            </Box>
        </Stack>

        <Box sx={{marginTop: "30px", display: "flex", flexWrap: "wrap" ,justifyContent: "space-between", alignItems: "center"}}>
            <Box sx={{width: "18.75rem", height: "300px", backgroundColor: "#EEEEEE", borderRadius:"20px"}}>

            </Box>

            <Box sx={{width: "18.75rem", height: "300px", backgroundColor: "#EEEEEE", borderRadius:"20px"}}>

            </Box>
        </Box>
    </Box>
  )
}

export default Profile
