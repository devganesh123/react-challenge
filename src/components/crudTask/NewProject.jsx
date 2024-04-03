import React from "react";
import { Typography } from "@mui/material";

const NewProject = ({ onShowInitial }) => {
  return (
    <div className="right-section">
      <Typography>No Project Selectd</Typography>
      <Typography>Select a project or get started with new one</Typography>
      <button onClick={onShowInitial}> Create new project</button>
    </div>
  );
};

export default NewProject;
