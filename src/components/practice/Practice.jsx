import React from "react";
import List from "./List";

const Practice = () => {
  return (
    <ul>
      <List>One</List>
      <List variant="outlined">Two</List>
      <List size="large" variant="outlined">
        Three
      </List>
    </ul>
  );
};

export default Practice;
