import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import ReactApexChart from 'react-apexcharts';

const PieChart = ({title, value, series, colors}) => {
  return (
    <Box mt={3}>
    <Box
      id="chart"
      flex={1}
      display="flex"
      bgcolor="#FcFcFc"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      pl={3.5}
      py={2}
      gap={2}
      borderRadius="15px"
      minHeight="110px"
      width="350px"
      sx={{boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"}}
    >
      <Stack direction="column">
        <Typography fontSize={14} color="#808191">{title}</Typography>
        <Typography fontSize={24} fontWeight={700} mt={1} color="#11142D">{value}</Typography>

      </Stack>

      <ReactApexChart
        options = {{
          chart: {type: 'donut'},
          colors,
          legend: {show: false},
          dataLabels: {enabled: false}
        }}
        series={series}
        type='donut'
        width="120px"
       />
    </Box>
    </Box>
  )
}

export default PieChart