import React from "react";
import CommonTitle from "../../components/common/CommonTitle";
import CrudApp from "../../components/crudTask/CrudApp";

const CrudTask = () => {
  return (
    <>
      <CommonTitle day={14} title="Project Crud"></CommonTitle>
      <CrudApp></CrudApp>
    </>
  );
};

export default CrudTask;
