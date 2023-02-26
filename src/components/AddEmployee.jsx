import React, { useState } from "react";
import {
  Typography,
  Box,
  FormControl,
  FormHelperText,
  TextareaAutosize,
  TextField,
  Chip,
  Stack
} from "@mui/material";
import CustomButton from "./CustomButton";
import "./AddEmployee.css";
import upload from "../images/upload.png";
import { useReducer } from "react";
import { useEffect } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom"

const AddEmployee = () => {

  const navigate = useNavigate();
  const [isUploaded, setIsUploaded] = useState(false);
  const [file, setFile] = useState([]);
  const [skills, setSkills] = useState({});
  const [primarySkills, setPrimarySkills] = useState([]);
  const [secondarySkills, setSecondarySkills] = useState([]);
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
        BU: e.target.bu.value,
        contactNo: e.target.contactNo.value,
        linkedin: e.target.linkedin.value,
        github: e.target.github.value,
        experience: 5,
        billed: "YES",
        bufferTime: 2,
        status: {
          available: true,
          inProgress: null,
          allocated: null,
          billed:null
      },
      skills: {
          primarySkills: primarySkills,
          secondarySkills: secondarySkills,
          otherSkills: [
            "InVision",
            "Figma",
            "Karma"
        ],
        }

    }
    // console.log(e.target.empId.value);
    // console.log(file);

    axios.post("http://localhost:5000/employees", employeeObj).then((res) => {
        console.log(res.data);
        navigate("/people");
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
    axios.post("http://localhost:8000/get-resume-skills", fileFormdata, {headers: { 'content-type': 'multipart/form-data' }}).then((res) => {
        console.log(res.data);
        setPrimarySkills(res.data.primary_skills)
        setSecondarySkills(res.data.secondary_skills)
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
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
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
                    console.log({event:event.target.files[0]})
                    let formData = new FormData();
                    formData.set("file",event.target.files)
                  //   axios.post("http://localhost:8000/get-resume-skills", formData, {headers: { 'content-type': 'multipart/form-data' }}).then((res) => {
                  //     console.log(res.data.primary_skills);

                  //     // setSkills(res.data);
                  // }).catch((err) => {
                  //     // alert(err);
                  //     console.log(err);
                  // })
                  }}
                />
              </label>
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
                Primary Skills <span className="required">*</span>
              </FormHelperText>
              <Stack direction="row" spacing={1}>
  {primarySkills.map((skill)=><Chip label={skill} color="primary" />)}
</Stack>

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
                Secondary Skills <span className="required">*</span>
              </FormHelperText>
              <Stack direction="row" spacing={1}>
  {secondarySkills.map((skill)=><Chip label={skill} color="success" />)}
</Stack>

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
