import React, { useEffect } from "react";
import {
  Box,
  Typography,
  FormControl,
  FormHelperText,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import CustomButton from "./CustomButton";
import "../styles.css";
import { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const CreateJob = () => {
  const [desc, setDesc] = useState("");
  const [assignee, setAssignee] = useState("");
  const [title, setTitle] = useState("");

  const [userId, setUserId] = useState(0);

  const [job, setJob] = useState([]);

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    const jd = {
      content: desc,
      assignedBy: assignee,
      title: title,
      creator: userId,
    };

    axios
      .post("http://localhost:5000/job-descriptions", jd)
      .then((res) => {
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    navigate("/jobs")
  };

  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get("token");

    axios
      .get("http://localhost:5000/users/me", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        setUserId(res.data._id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  return (
    <Box mt={7}>
      <Typography fontSize={25} fontWeight={700}>
        Create a Job Description
      </Typography>

      <Box
        borderRadius="15px"
        bgcolor="#fcfcfc"
        mt={3}
        sx={{
          padding: "2px 30px 30px 30px",
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;",
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
              Enter Job Title <span className="required">*</span>
            </FormHelperText>
            <TextField
              fullWidth
              required
              placeholder="Job Title"
              id="outlined-basic"
              color="warning"
              variant="outlined"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
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
              Enter job description <span className="required">*</span>
            </FormHelperText>

            <TextareaAutosize
              minRows={5}
              required
              placeholder="Write description"
              color="warning"
              value={desc}
              style={{
                width: "100%",
                background: "transparent",
                fontSize: "16px",
                borderColor: "rgba(0,0,0,0.23)",
                borderRadius: 6,
                padding: 10,
                color: "#342E39",
              }}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
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
              Requested By <span className="required">*</span>
            </FormHelperText>
            <TextField
              fullWidth
              required
              placeholder="Employee ID"
              id="outlined-basic"
              color="warning"
              variant="outlined"
              value={assignee}
              onChange={(e) => {
                setAssignee(e.target.value);
              }}
            />
          </FormControl>

          <CustomButton
            fullWidth
            type="submit"
            title="Add JD"
            backgroundColor="#F5AE45"
            color="#fcfcfc"
          />
        </form>
      </Box>
    </Box>
  );
};

export default CreateJob;
