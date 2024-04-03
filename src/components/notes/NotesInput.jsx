import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const NotesInput = ({ classes, value, onDelete }) => {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;

  function deleteHandler() {
    onDelete();
  }
  return (
    <>
      <p>{value}</p>
      <div className={classes.note_list_date}>
        <span>{currentDate}</span>
        <DeleteIcon onClick={deleteHandler}></DeleteIcon>
      </div>
    </>
  );
};

export default NotesInput;
