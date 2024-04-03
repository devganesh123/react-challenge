import React, { useReducer, useRef } from "react";

const initialState = {
  title: "",
  desc: "",
  date: "",
  tasks: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "titleChange": {
      return {
        ...state,
        title: action.value,
      };
    }
    case "descChange": {
      return {
        ...state,
        desc: action.value,
      };
    }
    case "dateChange": {
      return {
        ...state,
        date: action.value,
      };
    }
  }
};

const CrudForm = ({ onUserListDetails }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const submitForm = (event) => {
    event.preventDefault();
    onUserListDetails(state);
    resetForm();
  };

  const resetForm = () => {
    state.title = "";
    state.desc = "";
    state.date = "";
  };

  const cancelSubmit = (event) => {
    event.preventDefault();
  };

  const handleTitleChange = (e) => {
    dispatch({
      type: "titleChange",
      value: e.target.value,
    });
  };

  const handleDescChange = (e) => {
    dispatch({
      type: "descChange",
      value: e.target.value,
    });
  };

  const handleDateChange = (e) => {
    dispatch({
      type: "dateChange",
      value: e.target.value,
    });
  };

  return (
    <form onSubmit={submitForm}>
      <div className="inputLabel">
        <label htmlFor="title">Title</label>

        <input
          type="text"
          id="title"
          value={state.title}
          onChange={handleTitleChange}
          required
        />
      </div>
      <div className="inputLabel">
        <label htmlFor="desc">Desc</label>
        <textarea
          id="desc"
          value={state.desc}
          onChange={handleDescChange}
          required
        ></textarea>
      </div>
      <div className="inputLabel">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={state.date}
          onChange={handleDateChange}
          required
        />
      </div>
      <div>
        <button>Save</button>
        {/* <span onClick={cancelSubmit}>Cancel</span> */}
      </div>
    </form>
  );
};

export default CrudForm;
