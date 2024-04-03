import React from "react";
import classes from "./CommonTitle.module.css";

const CommonTitle = ({ day, title }) => {
  return (
    <div className={`${classes.heading}`}>
      Day {day} / {title}
    </div>
  );
};

export default CommonTitle;
