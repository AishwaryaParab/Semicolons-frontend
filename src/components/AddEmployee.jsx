import React, { useState } from "react";
import {
  Typography,
  Box,
  FormControl,
  FormHelperText,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import CustomButton from "./CustomButton";
import "./AddEmployee.css";
import upload from "../images/upload.png";
import { useReducer } from "react";
import { useEffect } from "react";
import axios from "axios";

const AddEmployee = () => {
  const [isUploaded, setIsUploaded] = useState(false);
  const [file, setFile] = useState([]);
  const [skills, setSkills] = useState({});

  const [loading, setLoading] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    const employeeObj = {
        empId: e.target.empId.value,
        name: e.target.name.value,
        email: e.target.email.value,
        grade: e.target.grade.value,
        jobTitle: e.target.jobTitle.value,
        location: e.target.location.value,
        bu: e.target.bu.value,
        contactNo: e.target.contactNo.value,
        linkedin: e.target.linkedin.value,
        github: e.target.github.value,
        // skills: 

    }
    // console.log(e.target.empId.value);
    // console.log(file);

    axios.post("http://localhost:5000/employees", employeeObj).then((res) => {
        console.log(res.data);
    }).catch((err) => {
        console.log(err);
    })
  };

  useEffect(() => {
    console.log(file);
    let formData = new FormData();
    if(file) {
        formData.append('file', file[0]);
        fetchSkillsFromResume(formData);
    }

  }, [file]) 
 

  const fetchSkillsFromResume = async(fileFormdata) => {
    axios.post("http://localhost:5000/get-resume-skills", fileFormdata, {headers: { 'content-type': 'multipart/form-data' }}).then((res) => {
        console.log(res.data);
        // setSkills(res.data);
    }).catch((err) => {
        // alert(err);
        console.log(err);
    })
  }  

//   const [currentState, dispatch] useReducer(reducer, initialState);
  return (
    <Box mt={7}>
      <Typography fontSize={25} fontWeight={700}>
        Add Employee
      </Typography>
      <Box sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Box
          borderRadius="15px"
          bgcolor="#fcfcfc"
          mt={3}
          sx={{
            padding: "2px 30px 30px 30px",
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;",
            width: "60%",
          }}
        >
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
                Enter employee ID <span className="required">*</span>
              </FormHelperText>

              <TextField
                fullWidth
                name="empId"
                required
                type="number"
                placeholder="Employee ID"
                id="outlined-basic"
                color="warning"
                variant="outlined"
                //   onChange={(e) => {setAssignee(e.target.value)}}
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
                Enter name <span className="required">*</span>
              </FormHelperText>
              <TextField
                fullWidth
                name="name"
                required
                placeholder="Name"
                id="outlined-basic"
                color="warning"
                variant="outlined"
                //   onChange={(e) => {setAssignee(e.target.value)}}
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
                Enter email <span className="required">*</span>
              </FormHelperText>
              <TextField
                fullWidth
                required
                name="email"
                type="email"
                placeholder="Email"
                id="outlined-basic"
                color="warning"
                variant="outlined"
                //   onChange={(e) => {setAssignee(e.target.value)}}
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
                Enter grade
              </FormHelperText>
              <TextField
                fullWidth
                type="number"
                name="grade"
                placeholder="Grade"
                id="outlined-basic"
                color="warning"
                variant="outlined"
                //   onChange={(e) => {setAssignee(e.target.value)}}
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
                Enter job title <span className="required">*</span>
              </FormHelperText>
              <TextField
                fullWidth
                required
                name="jobTitle"
                placeholder="Job Title"
                id="outlined-basic"
                color="warning"
                variant="outlined"
                //   onChange={(e) => {setAssignee(e.target.value)}}
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
                Enter location <span className="required">*</span>
              </FormHelperText>
              <TextField
                fullWidth
                required
                name="location"
                placeholder="Location"
                id="outlined-basic"
                color="warning"
                variant="outlined"
                //   onChange={(e) => {setAssignee(e.target.value)}}
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
                Enter BU <span className="required">*</span>
              </FormHelperText>
              <TextField
                fullWidth
                required
                name="bu"
                placeholder="BU"
                id="outlined-basic"
                color="warning"
                variant="outlined"
                //   onChange={(e) => {setAssignee(e.target.value)}}
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
                Enter contact number <span className="required">*</span>
              </FormHelperText>
              <TextField
                fullWidth
                required
                type="number"
                name="contactNo"
                placeholder="Contact Number"
                id="outlined-basic"
                color="warning"
                variant="outlined"
                //   onChange={(e) => {setAssignee(e.target.value)}}
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
                Enter LinkedIn URL
              </FormHelperText>
              <TextField
                fullWidth
                placeholder="LinkedIn URL"
                id="outlined-basic"
                name="linkedin"
                color="warning"
                variant="outlined"
                //   onChange={(e) => {setAssignee(e.target.value)}}
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
                Enter GitHub URL
              </FormHelperText>
              <TextField
                fullWidth
                placeholder="GitHub URL"
                id="outlined-basic"
                name="github"
                color="warning"
                variant="outlined"
                //   onChange={(e) => {setAssignee(e.target.value)}}
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
                Skills <span className="required">*</span>
              </FormHelperText>

              {/* <TextField
              fullWidth
              required
              placeholder="Name"
              id="outlined-basic"
              color="warning"
              variant="outlined"
            //   onChange={(e) => {setAssignee(e.target.value)}}
            /> */}

              <label htmlFor="upload-file" id="upload-file-label">
                Select the File
                <br />
                <img src={upload} alt="upload-file" className="upload-icon" />
                {!isUploaded && <p className="selected-file">{file[0] ? file[0].name : ""}</p>}
                <input
                  accept=".pdf"
                  type="file"
                  id="upload-file"
                  onChange={(event) => {
                    setFile(Array.from(event.target.files));
                    const reader = new FileReader();

                    reader.readAsText(Array.from(event.target.files)[0]);
                  }}
                />
              </label>
            </FormControl>

            <CustomButton
              fullWidth
              type="submit"
              title="Submit"
              backgroundColor="#F5AE45"
              color="#fcfcfc"
            />
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default AddEmployee;
