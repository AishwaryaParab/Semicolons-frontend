import React, { useState } from "react";
import { Box, Typography, Stack, Card, CardContent } from "@mui/material";
import PieChart from "../graphs/PieChart";
import ReactApexChart from "react-apexcharts";
import { ArrowCircleUpRounded } from "@mui/icons-material";
import cloud from "../images/cloud.png";

import { ApexOptions } from "apexcharts";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import axios from "axios";

const TotalRevenueSeries = [
  {
    name: "Last Month",
    data: [85, 124, 115, 183, 0, 0, 0],
  },
];

export const TotalRevenueOptions = {
  chart: {
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  colors: ["#475BE8"],
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      columnWidth: "55%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  stroke: {
    colors: ["transparent"],
    width: 4,
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  },
  yaxis: {
    title: {
      text: "Employees",
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
  },
  tooltip: {
    y: {
      formatter(val) {
        return `$ ${val} thousands`;
      },
    },
  },
};

const Dashboard = () => {
  const cookies = new Cookies();
  const token = cookies.get("token");

  const [bu, setBu] = useState("");
  const [domain, setDomain] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/users/me", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        setBu(res.data.BU);
        axios
          .get(`http://localhost:5000/employee/get-tech-domain?BU=${bu}`)
          .then((res) => {
            setDomain(res.data);
            console.log(res.data)
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box mt={7}>
      <Box>
        <Typography fontSize={25} fontWeight={700} color="#11142D">
          BU Capabilities
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          flexWrap="wrap"
          gap={3}
        >
          <PieChart
            title="UI Angular Resources"
            value={276}
            series={[50, 50]}
            colors={["#275BE8", "#c4E8EF"]}
          />

          <PieChart
            title="UI React Resources"
            value={296}
            series={[53, 47]}
            colors={["#275BE8", "#c4E8EF"]}
          />

          <PieChart
            title="QA Resources"
            value={117}
            series={[21, 79]}
            colors={["#275BE8", "#c4E8EF"]}
          />

          <PieChart
            title="Java Fullstack Resources"
            value={252}
            series={[46, 54]}
            colors={["#275BE8", "#c4E8EF"]}
          />

          <PieChart
            title="DevOps Resources"
            value={188}
            series={[34, 66]}
            colors={["#275BE8", "#c4E8EF"]}
          />

          <PieChart
            title="Cloud Resources"
            value={132}
            series={[24, 76]}
            colors={["#275BE8", "#c4E8EF"]}
          />

          <PieChart
            title=".NET Resources"
            value={131}
            series={[24, 76]}
            colors={["#275BE8", "#c4E8EF"]}
          />
        </Box>

        <Stack mt={7} width="100%" direction={{ xs: "column", lg: "row" }}>
          <Box
            display="flex"
            flexDirection="column"
            flex={1}
            // p={4}
            bgcolor="#fcfcfc"
            borderRadius="15px"
          >
             <Typography fontSize={25} fontWeight={700} color="#11142D">
          Total Allocations
        </Typography>

            <Stack my="20px" direction="row" gap={4} flexWrap="wrap">
              <Typography fontSize={20} fontWeight={700} color="#11142d">
                535 Allocations
              </Typography>
              {/* 
        <Stack direction='row' alignItems="center" gap={1}>
          <ArrowCircleUpRounded sx={{fontSize: 25, color: "#475be8"}} />
          <Stack>
            <Typography fontSize={15} color="#475be8">0.8%</Typography>
            <Typography fontSize={12} color="#808191">Than Last Month</Typography>
          </Stack>
        </Stack> */}
            </Stack>

            <ReactApexChart
              series={TotalRevenueSeries}
              type="bar"
              height={310}
              options={TotalRevenueOptions}
            />
          </Box>
        </Stack>
      </Box>

      <Typography fontSize={25} fontWeight={700} color="#11142D" mt={4}>
        Certifications
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
        }}
      >
        <Card
          sx={{
            maxWidth: "330px",
            height: "250px",
            marginTop: "20px",
            padding: "10px",
            "&:hover": {
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
            },
            cursor: "pointer",
            textDecoration: "none",
            // border: "2px solid black",
            borderRadius: "12px",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          }}
          elevation={0}

          // onClick={() => {navigate(`/jobs/${id}`, {state: {id, title, job_desc, assignedBy}})}}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Stack direction="column" gap={0.5} alignItems="flex-start">
              <Typography fontSize={20} fontWeight={400} color="#342E39">
                Software AG Professionals
              </Typography>
              <div
                style={{
                  marginTop: "30px",
                  padding: "0 40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    backgroundColor: "#F4F4F4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={cloud} style={{ width: "60px" }} />
                </div>

                <Typography fontSize={30} fontWeight={700} color="#342E39">
                  134
                </Typography>
              </div>
            </Stack>
          </CardContent>
        </Card>

        <Card
          sx={{
            maxWidth: "330px",
            height: "250px",
            marginTop: "20px",
            padding: "10px",
            "&:hover": {
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
            },
            cursor: "pointer",
            textDecoration: "none",
            // border: "2px solid black",
            borderRadius: "12px",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          }}
          elevation={0}

          // onClick={() => {navigate(`/jobs/${id}`, {state: {id, title, job_desc, assignedBy}})}}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Stack direction="column" gap={0.5} alignItems="flex-start">
              <Typography fontSize={20} fontWeight={400} color="#342E39">
                AWS Cloud Professionals
              </Typography>
              <div
                style={{
                  marginTop: "30px",
                  padding: "0 40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    backgroundColor: "#F4F4F4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={cloud} style={{ width: "60px" }} />
                </div>

                <Typography fontSize={30} fontWeight={700} color="#342E39">
                  105
                </Typography>
              </div>
            </Stack>
          </CardContent>
        </Card>

        <Card
          sx={{
            maxWidth: "330px",
            height: "250px",
            marginTop: "20px",
            padding: "10px",
            "&:hover": {
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
            },
            cursor: "pointer",
            textDecoration: "none",
            // border: "2px solid black",
            borderRadius: "12px",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          }}
          elevation={0}

          // onClick={() => {navigate(`/jobs/${id}`, {state: {id, title, job_desc, assignedBy}})}}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Stack direction="column" gap={0.5} alignItems="flex-start">
              <Typography fontSize={20} fontWeight={400} color="#342E39">
                Azure Cloud Professionals
              </Typography>
              <div
                style={{
                  marginTop: "30px",
                  padding: "0 40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    backgroundColor: "#F4F4F4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={cloud} style={{ width: "60px" }} />
                </div>

                <Typography fontSize={30} fontWeight={700} color="#342E39">
                  344
                </Typography>
              </div>
            </Stack>
          </CardContent>
        </Card>
      </Box>

      
    </Box>
  );
};

export default Dashboard;
