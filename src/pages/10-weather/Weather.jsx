import React from "react";
import CommonTitle from "../../components/common/CommonTitle";
import WeatherApi from "../../components/weather/WeatherApi";
const Weather = () => {
  return (
    <>
      <CommonTitle day="Ten" title="Weather Report"></CommonTitle>
      <WeatherApi></WeatherApi>
    </>
  );
};

export default Weather;
