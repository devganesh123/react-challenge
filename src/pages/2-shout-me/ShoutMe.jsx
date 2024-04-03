import React from "react";
import CommonTitle from "../../components/common/CommonTitle";
import ShoutInput from "../../components/shout/ShoutInput";

const ShoutMe = () => {
  return (
    <>
      <CommonTitle day={"Two"} title={"Shout @ Me"}></CommonTitle>
      <ShoutInput></ShoutInput>
    </>
  );
};

export default ShoutMe;
