import React, { useState } from "react";
import Box from "@mui/material/Box";
import classes from "./RandomColor.module.css";
import Typography from "@mui/material/Typography";

const RandomColor = () => {
  const [color, setColor] = useState("#1976d2");
  const randomColorHandler = () => {
    setColor(
      `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`
    );
  };
  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ marginBottom: "2rem" }}
      >
        Click below to Generate a Random Color
      </Typography>
      <Box
        className={classes.colorPicker}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          typography: "div",
          margin: "0 auto",
          backgroundColor: `${color}`,
        }}
        onClick={randomColorHandler}
      >
        <Typography variant="h6" noWrap component="div">
          {color}
        </Typography>
      </Box>
    </>
  );
};

export default RandomColor;
