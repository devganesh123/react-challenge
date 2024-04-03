import React, { useState } from "react";
import "./CrudApp.css";
import NewProject from "./NewProject";
import CrudSidebar from "./CrudSidebar";
import CrudForm from "./CrudForm";
import CrudUserDetails from "./CrudUserDetails";

const CrudApp = () => {
  const [showInitialScreen, setShowInitialScreen] = useState(true);
  const [project, setProject] = useState([]);
  const [userIndex, setUserIndex] = useState(null);
  const [userId, setUserId] = useState(0);
  const [isShowForm, setIsShowForm] = useState(false);

  function hideInitialScreen() {
    setShowInitialScreen(false);
    setIsShowForm(true);
  }

  const userDetailsHandler = (userList) => {
    setProject((prev) => [...prev, { ...userList, id: userId }]);
    setUserId((prev) => prev + 1);
  };

  //console.log(project);

  const showIndexedUser = (index) => {
    setUserIndex(index);
    setIsShowForm(false);
  };

  const updateTaskHandler = (id, updatedValue) => {
    console.log(id, updatedValue);

    /*
     * Add a task list for respected item with the help of id
     */

    const newTasks = project.map((item) => {
      if (item.id == id) {
        return {
          // item -> whole object
          ...item,
          // updated the tasklist value
          tasks: [...item.tasks, updatedValue],
        };
      }
      return item;
    });

    setProject(newTasks);
  };

  const deleteTaskHandler = (objectlist, taskId) => {
    const updatedLists = project.map((item) => {
      if (item.id == objectlist.id) {
        console.log([objectlist.id, objectlist, taskId]);
        return {
          ...item,
          tasks: item.tasks.filter((item, index) => taskId != index),
        };
      }
      return item;
    });

    setProject(updatedLists);
  };

  const removeProjectHandler = (projectId) => {
    const updatedProject = project.filter((item) => {
      return projectId != item.id;
    });

    setProject([...updatedProject]);
  };
  console.log(project);
  return (
    <>
      <div className="main-project">
        <div className="project-row">
          <div className="project-col left-col">
            <CrudSidebar
              onShowInitial={hideInitialScreen}
              projectList={project}
              onShowIndexedUser={showIndexedUser}
            ></CrudSidebar>
          </div>
          <div className="project-col">
            {showInitialScreen ? (
              <NewProject onShowInitial={hideInitialScreen}></NewProject>
            ) : (
              <div>
                {isShowForm && (
                  <CrudForm onUserListDetails={userDetailsHandler}></CrudForm>
                )}

                {!isShowForm && (
                  <CrudUserDetails
                    userList={project[userIndex]}
                    onUpdateTaskList={updateTaskHandler}
                    onRemoveTaskHandler={deleteTaskHandler}
                    onRemoveProject={removeProjectHandler}
                  ></CrudUserDetails>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CrudApp;
