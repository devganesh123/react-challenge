import React from "react";
import CommonTitle from "../../components/common/CommonTitle";
import ReminderCard from "../../components/Reminder/ReminderCard";
const Reminder = () => {
  return (
    <>
      <CommonTitle day="Five" title="Relish Reminder"></CommonTitle>
      <ReminderCard></ReminderCard>
    </>
  );
};

export default Reminder;
