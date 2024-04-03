import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Box, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import CommonCard from "../common/CommonCard";
import DUMMYAPI from "../../Cars";

const FactsApi = () => {
  const [showApi, setShowApi] = useState(false);
  // const [calories, setCalories] = useState(2000);
  // const [foodLists, setFoodLists] = useState([]);
  // const APIKEY = "3f5cfeab32f841fc9d03b940607b06a1";
  // const APIURI = `https://api.spoonacular.com/mealplanner/generate`;

  // useEffect(() => {
  //   fetch(
  //     `${APIURI}?apiKey=${APIKEY}&timeFrame=day&timeFrame=day&targetCalories=${calories}`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setFoodLists(data.meals);
  //     })
  //     .catch(() => {
  //       console.log("error");
  //     });
  // }, []);

  const showHandler = () => {
    setShowApi(true);
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
        {/* <div>
          <TextField
            id="fullWidth"
            fullWidth
            label="Enter Calories"
            value={calories}
            onChange={changeHandler}
          />
        </div> */}
        <Button
          variant="contained"
          sx={{ marginBottom: "2rem" }}
          onClick={showHandler}
        >
          Get Car Facts
        </Button>

        {showApi && (
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 2 }}
          >
            {DUMMYAPI.car_facts.map((item) => (
              <CommonCard
                key={item.fact_id}
                id={item.fact_id}
                image={item.source_img}
                title={item.title}
                desc={item.desc}
                price={item.price}
              ></CommonCard>
            ))}
          </Stack>
        )}
      </Box>
    </>
  );
};

export default FactsApi;
