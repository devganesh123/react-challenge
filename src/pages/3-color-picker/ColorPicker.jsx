import React from "react";
import RandomColor from "../../components/colorpicker/RandomColor";
import CommonTitle from "../../components/common/CommonTitle";
const ColorPicker = () => {
  return (
    <>
      <CommonTitle day="Three" title="Random Color Generator"></CommonTitle>
      
      <RandomColor></RandomColor>
    </>
  );
};

export default ColorPicker;
