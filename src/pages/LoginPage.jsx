import React, {useState} from 'react';
import { FormControl, TextField, FormHelperText, Box, Typography } from '@mui/material';
import CustomButton from '../components/CustomButton';
import { Login } from '@mui/icons-material';
import axios from "axios";
import { useEffect } from 'react';
import Cookies from "universal-cookie"
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const cookies = new Cookies();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/users/login", {email, password}).then((response) => {

      cookies.set("token", JSON.stringify(response.data.token), {
        path: "/",
        maxAge: 3600, // Cookie expires after 1hr 5secs
      });
      cookies.set("user", JSON.stringify(response.data.user), {
        path: "/",
        maxAge: 3600, // Cookie expires after 1hr 5secs
      });

      navigate("/");
    }).catch((err) => {
      alert("Invalid Username and Password");
      console.log(err);
    })
  }

  useEffect(() => {
    const token = cookies.get("token");

    if(token) {
      return navigate("/");
    }
  }, [])

  return (
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#342E39"}}>
      <Box borderRadius="15px" width="50%" padding="30px" bgcolor="white">
        <h1 style={{color: "#342E39"}}>Login</h1>
        <div style={{width:"70px", height:"5px", backgroundColor: "#F5AE45", marginTop: "10px", borderRadius: "4px"}}></div>


        <form
          style={{
            marginTop: "20px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
          onSubmit={(e) => handleSubmit(e)}
        >
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#342E39",
              }}
            >
              Email address  <span className="required">*</span>
            </FormHelperText>

            <TextField
              fullWidth
              required
              value={email}
              placeholder="Enter email address"
              id="outlined-basic"
              color="warning"
              variant="outlined"
              onChange={(e) => {setEmail(e.target.value)}}
            />
          </FormControl>

          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#342E39",
              }}
            >
              Password  <span className="required">*</span>
            </FormHelperText>

            <TextField
              type="password"
              fullWidth
              required
              value={password}
              placeholder="Enter password"
              id="outlined-basic"
              color="warning"
              variant="outlined"
              onChange={(e) => {setPassword(e.target.value)}}
            />
          </FormControl>

          
        

          <CustomButton
            icon={<Login />}
            fullWidth
            type="submit"
            title="Login"
            backgroundColor="#F5AE45"
            color="#fcfcfc"
          />
        </form>
      </Box>
    </Box>
  )
}

export default LoginPage