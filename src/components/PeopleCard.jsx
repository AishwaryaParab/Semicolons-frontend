import React from "react";
import {Avatar} from '@mui/material';

import "./PeopleCard.css";

const PeopleCard = ({ employee }) => {
  const name = employee.name.split(" ");

  return (
    <div className="people-card">
      <p className="people-card-avatar">
        {name[0][0]} {name[name.length - 1][0]}
      </p>
      <p className="people-card-name">{employee.name}</p>
      <p className="people-card-emp-id">{employee.empId}</p>
      <p className="people-card-bu">{employee.BU}</p>
      <p className="people-card-job-title">{employee.jobTitle}</p>
      <p className="people-card-email">{employee.email}</p>
    </div>
  );
};

export default PeopleCard;
