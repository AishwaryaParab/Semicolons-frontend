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
import { DataGrid } from '@mui/x-data-grid'

const EmployeeTable = ( props ) => {
    const {jdId} = props;
  const [employeeLoading,setEmployeeLoading] = useState(false);
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

  const columns = [
    { field: 'empId', headerName: 'Emp ID', width: 60},
    { field: 'name', headerName: 'Name',minWidth: 200},
    { field: 'jobTitle', headerName: 'Job Title', minWidth: 200,},
    { field: 'email', headerName: 'email',minWidth:300},
    { field: 'grade', headerName: 'Grade'},
    { field: 'BU', headerName: "BU", minWidth:200}
  ];

  useEffect(() => {
setEmployeeLoading(true);
    axios
      .post(`http://localhost:5000/${jdId}/rank-employees`) 
      .then((response) => {
        const data = response.data;
        console.log(data);

        setPeople(data);
        // setPages(data.page.noOfPages);
        setEmployeeLoading(false);

      })
      .catch((error) => {
        setEmployeeLoading(false);
        console.log(error);
      });

  }, [page]);

  return (
    <>
    <Box>
            <div style={{ height: 400, width: '100%', marginTop:10 }}>
            <DataGrid
            loading={employeeLoading}
        rows={people?people:[]}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[20]}
        checkboxSelection
        getRowId={(row) => row.empId}
      />
      </div>
      {/* </Box> */}
{/* 
      <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", gap: 4, marginTop: "30px"}}>
   
        {minPageNumber !== 1 && <ArrowCircleLeftRounded sx={{ color: "#F5AE45", cursor: "pointer"}} onClick={() => {setMinPageNumber(minPageNumber - pageNumberLimit); setMaxPageNumber(maxPageNumber - pageNumberLimit)}} />}

         {[...Array(pages)].map((item, index) => {
          if(index+1 >= minPageNumber && index+1 <= maxPageNumber) {
            return <span className={page === index + 1 ? "active" : "inactive"} onClick={() => {setPage(index + 1)}} key={index}>
              {index + 1}
            </span>
          }
         })}

        {maxPageNumber !== pages && <ArrowCircleRightRounded sx={{ color: "#F5AE45", cursor: "pointer"}} onClick={() => {setMinPageNumber(minPageNumber + pageNumberLimit); setMaxPageNumber(maxPageNumber + pageNumberLimit)}} />}  */}
{/* 
      </Box> */}
    </Box>
    </>
  );
};

export default EmployeeTable;
