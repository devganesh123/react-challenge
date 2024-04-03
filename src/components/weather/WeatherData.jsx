import React, { useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";

import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import WavesIcon from "@mui/icons-material/Waves";
import AirIcon from "@mui/icons-material/Air";

const WeatherData = ({ onCountryName }) => {
  const [showResult, setShowResult] = useState([]);
  const [statusOk, setStatusOk] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    fetch(APIURI, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.cod == 200) {
          setStatusOk(true);
          setShowResult(data);
        } else {
          console.log(false);
        }
      })
      .catch((error) => {
        setErrorMsg(error);
      });
  }, [onCountryName]);

  const APIURI = `https://api.openweathermap.org/data/2.5/weather?q=${onCountryName}&appid=9382feb88f46f0808ac4406cbd1d6ac7`;

  const fahrenToCelsius = (val) => {
    let celsius = (val - 32) * (5 / 9);
    return celsius.toFixed(2);
  };
  return (
    <>
      {statusOk && (
        <div style={{ color: "white" }}>
          <div style={{ margin: "1rem auto" }}>
            <AccessAlarmIcon></AccessAlarmIcon>
          </div>
          <Typography gutterBottom variant="h3" component="div">
            {fahrenToCelsius(showResult.main.temp)}
            <sup>o</sup> C
          </Typography>
          <Typography gutterBottom variant="h4" component="div">
            {showResult.name}
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 2 }}
            sx={{ margin: "2rem" }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 2 }}
            >
              <div>
                <WavesIcon></WavesIcon>
              </div>
              <div>
                <Typography gutterBottom variant="h5" component="div">
                  {showResult.main.humidity} %
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Humidity
                </Typography>
              </div>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 2 }}
            >
              <div>
                <AirIcon></AirIcon>
              </div>
              <div>
                <Typography gutterBottom variant="h5" component="div">
                  {showResult.wind.speed} km/h
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Wind Speed
                </Typography>
              </div>
            </Stack>
          </Stack>
        </div>
      )}
    </>
  );
};

export default WeatherData;
