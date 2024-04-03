import React from "react";
import CommonTitle from "../../components/common/CommonTitle";
import PetLogger from "../../components/petLog/PetLogger";

const PetLog = () => {
  return (
    <>
      <CommonTitle day="Seven" title="Pet Log"></CommonTitle>
      <PetLogger></PetLogger>
    </>
  );
};

export default PetLog;
