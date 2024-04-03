import React from "react";
import TikTak from "../../components/tiktak/TikTak";
import CommonTitle from "../../components/common/CommonTitle";

const TicTac = () => {
  return (
    <div>
      <CommonTitle day="Twelve" title="Tic Tac Game"></CommonTitle>
      <TikTak></TikTak>
    </div>
  );
};

export default TicTac;
