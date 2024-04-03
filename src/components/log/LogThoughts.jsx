import React, { useState, useEffect } from "react";
import CommonInput from "../common/CommonInput";
import { Button } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

let keyId = 0;

let getStoredLogThoughts = localStorage.getItem("storeLogThoughts");

let checkTheItem = getStoredLogThoughts ? JSON.parse(getStoredLogThoughts) : [];

const LogThoughts = () => {
  const [value, setValue] = useState("Post a Message");
  const [posts, setPosts] = useState(checkTheItem);

  useEffect(() => {
    localStorage.setItem("storeLogThoughts", JSON.stringify(posts));
  }, [posts]);

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  let currentTime = new Date().toLocaleTimeString();

  const postHandler = () => {
    setPosts([
      ...posts,
      {
        id: keyId++,
        postValue: value,
        postedTime: currentTime,
      },
    ]);
    localStorage.setItem("storeLogThoughts", JSON.stringify(posts));
  };

  const removeHandler = (id) => {
    setPosts(posts.filter((item) => item.id != id));
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, maxWidth: 500 },
        }}
        noValidate
        autoComplete="off"
      >
        <CommonInput
          onChangeHandler={changeHandler}
          value={value}
          label="Post a Message"
        ></CommonInput>
      </Box>
      <Button variant="contained" size="small" onClick={postHandler}>
        Post
      </Button>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 2 }}
      >
        {posts.map((item, index) => (
          <Card sx={{ maxWidth: 345 }} key={index}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.postValue}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.postedTime}
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

export default LogThoughts;
