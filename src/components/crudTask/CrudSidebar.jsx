import React from "react";
import { Typography } from "@mui/material";

const CrudSidebar = ({ onShowInitial, projectList, onShowIndexedUser }) => {
  return (
    <div className="left-sidebar">
      <Typography>Your Projects</Typography>
      <button onClick={onShowInitial}>
        <Typography>+ Add Project </Typography>
      </button>
      <ul>
        {projectList.map((item, index) => (
          <li key={index}>
            <Typography
              onClick={() => {
                onShowIndexedUser(index);
              }}
            >
              {item.title}
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudSidebar;
