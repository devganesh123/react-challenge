import React, { useState, useReducer } from "react";
import CommonInput from "../common/CommonInput";
import { Button } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CommonSelect from "../common/CommonSelect";

let keyId = 0;

const reducer = (state, action) => {
  if (action.type == "selectInput") {
    return {
      ...state,
      animal: action.nextName,
    };
  } else if (action.type == "petName") {
    return {
      ...state,
      petName: action.nextName,
    };
  } else if (action.type == "ownerName") {
    return {
      ...state,
      ownerName: action.nextName,
    };
  } else if (action.type == "illness") {
    return {
      ...state,
      illness: action.nextName,
    };
  }
};

const initialState = {
  id: ++keyId,
  animal: "",
  petName: "",
  ownerName: "",
  illness: "",
};

const PetLogger = () => {
  const [stateValue, dispatch] = useReducer(reducer, initialState);
  const [results, setResults] = useState([]);

  const submitFormHandler = () => {
    setResults([
      ...results,
      {
        ...stateValue,
        id: keyId++,
      },
    ]);
    stateValue.petName = "";
    stateValue.ownerName = "";
    stateValue.illness = "";
  };

  const removeHandler = (id) => {
    setResults(results.filter((item) => item.id != id));
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "500px",
          margin: "10px auto 30px",
        }}
      >
        <div>
          <CommonSelect
            onChangeHandler={(event) => {
              dispatch({ type: "selectInput", nextName: event.target.value });
            }}
            value={stateValue.animal}
          ></CommonSelect>
        </div>
        <div>
          <CommonInput
            onChangeHandler={(event) => {
              dispatch({ type: "petName", nextName: event.target.value });
            }}
            value={stateValue.petName}
            label="Pet Name"
          ></CommonInput>
        </div>
        <div>
          <CommonInput
            onChangeHandler={(event) => {
              dispatch({ type: "ownerName", nextName: event.target.value });
            }}
            value={stateValue.ownerName}
            label="Owner Name"
          ></CommonInput>
        </div>
        <div>
          <CommonInput
            onChangeHandler={(event) => {
              dispatch({ type: "illness", nextName: event.target.value });
            }}
            value={stateValue.illness}
            label="illness"
          ></CommonInput>
        </div>
      </Box>
      <Button variant="contained" size="small" onClick={submitFormHandler}>
        Post
      </Button>
      {/* <p>{stateValue.animal} </p>
      <p>{stateValue.petName} </p>
      <p> {stateValue.ownerName} </p>
      <p> {stateValue.illness}</p> */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 2 }}
      >
        {results.map((item, index) => (
          <Card sx={{ maxWidth: 345 }} key={index}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.animal} <br></br>
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {item.petName} <br></br>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.ownerName} <br></br>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.illness} <br></br>
              </Typography>
              <Button
                variant="contained"
                size="small"
                sx={{ marginTop: "10px" }}
                onClick={() => {
                  removeHandler(item.id);
                }}
              >
                Remove Post
              </Button>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </>
  );
};

export default PetLogger;
