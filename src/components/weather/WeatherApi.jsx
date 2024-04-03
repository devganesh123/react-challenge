import React, { useState } from "react";

import { Box } from "@mui/material";
import CommonSearch from "../common/CommonSearch";
import WeatherData from "./WeatherData";

const WeatherApi = () => {
  const [country, setCountry] = useState("Chennai");
  const searchValueHandler = (searchResult) => {
    setCountry(searchResult);
  };

  return (
    <>
      <Box
        sx={{ maxWidth: "500px", margin: "0 auto", backgroundColor: "#1976d2" }}
      >
        <CommonSearch onSearchValue={searchValueHandler}></CommonSearch>
        {<WeatherData onCountryName={country}></WeatherData>}
      </Box>
    </>
  );
};

export default WeatherApi;
