import React from "react";
import { Button } from "@mui/material";

const List = ({ children, variant = "contained", ...props }) => {
  console.log(props);
  return (
    <li style={{ margin: "10px" }}>
      <Button variant={variant} size={props.size ? props.size : "medium"}>
        {children}
      </Button>
    </li>
  );
};

export default List;
