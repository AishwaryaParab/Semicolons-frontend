import React from "react";
import { Box, Typography, TextField} from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { SearchRounded } from "@mui/icons-material";
import CustomButton from "./CustomButton";
import PeopleCard from "./PeopleCard";
import "./PeopleCard.css";
import { ArrowLeft, ArrowCircleLeftRounded } from "@mui/icons-material";
import { ArrowRight, ArrowCircleRightRounded } from "@mui/icons-material";

const People = () => {
  const [people, setPeople] = useState([]);


  //searching
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // const [name, setName] = useState("");
  // const [empId, setEmpId] = useState("");
  // const [bu, setBu] = useState("");

  //pagination
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  const pageNumberLimit = 5;
  const [minPageNumber, setMinPageNumber] = useState(1);
  const [maxPageNumber, setMaxPageNumber] = useState(5);

  const limit = 20;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/employees?page=${page}&limit=${limit}`) 
      .then((response) => {
        const data = response.data;
        console.log(data);

        setPeople(data.employee);
        setPages(data.page.noOfPages);

      })
      .catch((error) => {
        console.log(error);
      });

  }, [page]);

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

        <Box sx={{display: "flex", gap: 3}}>
          <TextField
            variant="outlined"
            color="warning"
            placeholder="Search Employee"
            // value={searchTerm}

            // value={name}
            // onChange={(e) => {handleSearch(e)}}
          />
          <CustomButton
            icon={<SearchRounded />}
            fullWidth
            title="Search"
            backgroundColor="#F5AE45"
            color="#fcfcfc"
            // handleClick={handleSearch}
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
        {people.map((item, index) => {
          return <PeopleCard key={index} employee={item} />
        })}

      </Box>

      <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", gap: 4, marginTop: "30px"}}>
   
        {minPageNumber !== 1 && <ArrowCircleLeftRounded sx={{ color: "#F5AE45", cursor: "pointer"}} onClick={() => {setMinPageNumber(minPageNumber - pageNumberLimit); setMaxPageNumber(maxPageNumber - pageNumberLimit)}} />}

         {[...Array(pages)].map((item, index) => {
          if(index+1 >= minPageNumber && index+1 <= maxPageNumber) {
            return <span className={page === index + 1 ? "active" : "inactive"} onClick={() => {setPage(index + 1)}} key={index}>
              {index + 1}
            </span>
          }
         })}

        {maxPageNumber !== pages && <ArrowCircleRightRounded sx={{ color: "#F5AE45", cursor: "pointer"}} onClick={() => {setMinPageNumber(minPageNumber + pageNumberLimit); setMaxPageNumber(maxPageNumber + pageNumberLimit)}} />} 

      </Box>
    </Box>
  );
};

export default People;
