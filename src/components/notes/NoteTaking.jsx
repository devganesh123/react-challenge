import React, { useState, useEffect } from "react";
import NotesInput from "./NotesInput";
import classes from "./NotesInput.module.css";
import NotesTextArea from "./NotesTextArea";

let id = 1;

let getTheNotesInput = localStorage.getItem("notes");
let notesInputResult = getTheNotesInput ? JSON.parse(getTheNotesInput) : [];

const NoteTaking = () => {
  const [isNotesInput, setIsNotesInput] = useState(notesInputResult);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(isNotesInput));
  }, [isNotesInput]);

  const addNoteHandler = (textValue) => {
    setIsNotesInput((prev) => [
      ...prev,
      {
        id: id++,
        value: textValue,
      },
    ]);
  };

  function onDeleteHandler(id) {
    setIsNotesInput(isNotesInput.filter((item, index) => item.id != id));
  }
  return (
    <div>
      <NotesTextArea
        classes={classes}
        onTextAreaHandler={addNoteHandler}
      ></NotesTextArea>
      <ul className={classes.note_lists}>
        {isNotesInput.map((item, index) => (
          <li key={index} className={classes.note_list} id={item.id}>
            <div className={classes.note_list_item}>
              <NotesInput
                classes={classes}
                value={item.value}
                onDelete={() => onDeleteHandler(item.id)}
              ></NotesInput>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteTaking;
