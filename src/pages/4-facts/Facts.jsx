import React from "react";
import FactsApi from "../../components/Facts/FactsApi";
import CommonTitle from "../../components/common/CommonTitle";
const Facts = () => {
  return (
    <>
      <CommonTitle day="Four" title="Car Facts"></CommonTitle>
      <FactsApi></FactsApi>
    </>
  );
};

export default Facts;
