import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import classes from "./Root.module.css";
import { Container } from "@mui/material";

const Root = () => {
  return (
    <>
      <Header></Header>
      <main className={`${classes.mainSection}`}>
        <Container>
          <Outlet></Outlet>
        </Container>
      </main>
    </>
  );
};

export default Root;
