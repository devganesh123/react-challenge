import React from "react";
import CommonTitle from "../../components/common/CommonTitle";
import PasswordGen from "../../components/passwordgen/PasswordGen";

const PasswordGenerator = () => {
  return (
    <>
      <CommonTitle day={15} title="Random Password Generator"></CommonTitle>
      <PasswordGen></PasswordGen>
    </>
  );
};

export default PasswordGenerator;
