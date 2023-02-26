import { CSSProperties } from "react";

import DotLoader from "react-spinners/DotLoader";

import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

import axios from "axios";

import { useEffect } from "react";

import { useState } from "react";

import { SearchRounded } from "@mui/icons-material";

import CustomButton from "./CustomButton";

import PeopleCard from "./PeopleCard";

import "./PeopleCard.css";

import { ArrowLeft, ArrowCircleLeftRounded } from "@mui/icons-material";

import { ArrowRight, ArrowCircleRightRounded } from "@mui/icons-material";

import Cookies from "universal-cookie";

const override = {
  display: "block",

  margin: "100px auto",
};

const People = () => {
  const [people, setPeople] = useState([]);

  const [userBu, setUserBu] = useState("");

  //searching

  const [nameId, setNameId] = useState("");

  const [name, setName] = useState("");

  const [id, setId] = useState(0);

  const [bu, setBu] = useState("");

  const [skillset, setSkillset] = useState("");

  //pagination

  const [page, setPage] = useState(1);

  const [pages, setPages] = useState(1);

  const pageNumberLimit = 5;

  const [minPageNumber, setMinPageNumber] = useState(1);

  const [maxPageNumber, setMaxPageNumber] = useState(5);

  const [isLoading, setIsLoading] = useState(true);

  const limit = 20;

  useEffect(() => {
    const cookies = new Cookies();

    const token = cookies.get("token");

    axios

      .get("http://localhost:5000/users/me", {
        headers: { Authorization: "Bearer " + token },
      })

      .then((res) => {
        setUserBu(res.data.BU);

        setBu(userBu);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios

      .get(`http://localhost:5000/employees?page=${page}&limit=${limit}`)

      .then((response) => {
        const data = response.data;

        // console.log(data);

        setIsLoading(false);

        setPeople(data.employee);

        setPages(data.page.noOfPages);
      })

      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  const handleSearch = () => {
    const isNum = Number(nameId);

    let url = "";

    if (isNaN(isNum)) {
      setName(nameId);

      url = `name=${nameId}`;
    } else {
      setId(nameId);

      url = `empId=${nameId}`;
    }

    axios

      .get(`http://localhost:5000/employees?BU=${bu}&${url}`)

      .then((res) => {
        // console.log(res);

        setPeople(res.data.employee);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box mt={7}>
      <Box
        mt={2}
        sx={{
          display: "flex",

          justifyContent: "space-between",

          alignItems: "center",
        }}
      >
        <Typography fontSize={25} fontWeight={700} color="#342E39">
          Search People
        </Typography>

        <Box sx={{ display: "flex", gap: 3 }}>
          <TextField
            fullWidth
            variant="outlined"
            color="warning"
            placeholder="Search Name or Emp ID"
            value={nameId}
            onChange={(e) => {
              setNameId(e.target.value);
            }}
          />

          {/* <TextField

            variant="outlined"

            color="warning"

            placeholder="Search Skillset"

            // value={searchTerm}



            // value={name}

            // onChange={(e) => {handleSearch(e)}}

          /> */}

          <FormControl label="Search Skills" fullWidth>
            <InputLabel color="warning">Search Skills</InputLabel>

            <Select
              variant="outlined"
              color="warning"
              displayEmpty
              label="Search Skills"
              inputProps={{ "aria-label": "Without label" }}
              value={skillset}
              onChange={(e) => {
                setSkillset(e.target.value);
              }}
            >
              <MenuItem value="Java Fullstack">Java Fullstack</MenuItem>

              <MenuItem value=".NET">.NET</MenuItem>

              <MenuItem value="DevOps">DevOps</MenuItem>

              <MenuItem value="Cloud">Cloud</MenuItem>

              <MenuItem value="UI Angular">UI Angular</MenuItem>

              <MenuItem value="UI React">UI React</MenuItem>

              <MenuItem value="QA">QA</MenuItem>
            </Select>
          </FormControl>

          <FormControl label="Search BU" fullWidth>
            <InputLabel color="warning">Search BU</InputLabel>

            <Select
              variant="outlined"
              color="warning"
              displayEmpty
              label="Search BU"
              inputProps={{ "aria-label": "Without label" }}
              value={bu}
              onChange={(e) => {
                setBu(e.target.value);
              }}
            >
              <MenuItem value="BFSI">BFSI</MenuItem>

              <MenuItem value="HLS">HLS</MenuItem>

              <MenuItem value="PES">PES</MenuItem>

              <MenuItem value="Google">Google</MenuItem>

              <MenuItem value="CTO">CTO</MenuItem>

              <MenuItem value="IBM">IBM</MenuItem>

              <MenuItem value="Microsoft">Microsoft</MenuItem>

              <MenuItem value="PES2">PES2</MenuItem>

              <MenuItem value="Data Platform">Data Platform</MenuItem>

              <MenuItem value="Data Telecom">Data Telecom</MenuItem>
            </Select>
          </FormControl>

          <CustomButton
            icon={<SearchRounded />}
            fullWidth
            title="Search"
            backgroundColor="#F5AE45"
            color="#fcfcfc"
            handleClick={handleSearch}
          />
        </Box>
      </Box>

      <Box
        mt="20px"
        sx={{
          display: "flex",

          flexWrap: "wrap",

          gap: 3,

          alignItems: "center",

          justifyContent: "center",
        }}
      >
        <DotLoader
          color="purple"
          cssOverride={override}
          size={80}
          loading={isLoading}
        />

        {people.map((item, index) => {
          return <PeopleCard key={index} employee={item} />;
        })}
      </Box>

      {isLoading ? null : (
        <Box
          sx={{
            display: "flex",

            alignItems: "center",

            justifyContent: "center",

            gap: 4,

            marginTop: "30px",
          }}
        >
          {minPageNumber !== 1 && (
            <ArrowCircleLeftRounded
              sx={{ color: "#F5AE45", cursor: "pointer" }}
              onClick={() => {
                setMinPageNumber(minPageNumber - pageNumberLimit);

                setMaxPageNumber(maxPageNumber - pageNumberLimit);
              }}
            />
          )}

          {[...Array(pages)].map((item, index) => {
            if (index + 1 >= minPageNumber && index + 1 <= maxPageNumber) {
              return (
                <span
                  className={page === index + 1 ? "active" : "inactive"}
                  onClick={() => {
                    setPage(index + 1);
                  }}
                  key={index}
                >
                  {index + 1}
                </span>
              );
            }
          })}

          {maxPageNumber !== pages && (
            <ArrowCircleRightRounded
              sx={{ color: "#F5AE45", cursor: "pointer" }}
              onClick={() => {
                setMinPageNumber(minPageNumber + pageNumberLimit);

                setMaxPageNumber(maxPageNumber + pageNumberLimit);
              }}
            />
          )}
        </Box>
      )}
    </Box>
  );
};

export default People;
