import { Typography } from "@mui/material";
import React, { useState } from "react";

const CrudUserDetails = ({
  userList,
  onUpdateTaskList,
  onRemoveTaskHandler,
  onRemoveProject,
}) => {
  const [taskValue, setTaskValue] = useState("");

  const addTaskHandler = () => {
    onUpdateTaskList(userList.id, taskValue);
    setTaskValue("");
  };

  const removeTaskHandler = (index) => {
    onRemoveTaskHandler(userList, index);
  };

  const removeProject = (projectId) => {
    onRemoveProject(projectId);
  };
  return (
    <>
      {userList && (
        <div>
          <div className="userDetails">
            <div>
              <Typography variant="h4">{userList.title}</Typography>
              <button
                onClick={() => {
                  removeProject(userList.id);
                }}
              >
                <Typography> Delete</Typography>
              </button>
            </div>
            <Typography> {userList.date}</Typography>
            <Typography>{userList.desc}</Typography>
          </div>
          <div className="userTask">
            <Typography variant="h5">Task</Typography>

            <input
              style={{ height: "30px" }}
              type="text"
              value={taskValue}
              onChange={(event) => {
                setTaskValue(event.target.value);
              }}
            />
            <button onClick={addTaskHandler} style={{ marginLeft: "10px" }}>
              <Typography> Add Task</Typography>
            </button>
            <ul style={{ listStyleType: "none" }}>
              {userList.tasks.map((item, index) => (
                <li key={index} style={{ marginBottom: "10px" }}>
                  <Typography>{item} </Typography>
                  <button
                    onClick={() => {
                      removeTaskHandler(index);
                    }}
                  >
                    <Typography> Clear</Typography>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default CrudUserDetails;
