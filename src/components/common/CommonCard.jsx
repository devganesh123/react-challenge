import React, { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DUMMYAPI from "../../Cars";

export default function CommonCard({ id, image, title, desc, price }) {
  const [mealImg, setMealImg] = useState("");
  // const APIKEY = "3f5cfeab32f841fc9d03b940607b06a1";
  // const APIURI = `https://api.spoonacular.com/recipes`;
  // useEffect(() => {
  //   fetch(
  //     `https://api.spoonacular.com/recipes/${id}/information?apiKey=3f5cfeab32f841fc9d03b940607b06a1&includeNutrition=false`
  //   )
  //     .then((response) => {
  //       console.log(response);
  //       response.json();
  //     })
  //     .then((data) => console.log(data));
  // }, []);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={`./src/${image}`} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          size="small"
          sx={{ marginTop: "1rem" }}
        >
          Price : {price} Million{" "}
        </Typography>
      </CardContent>
    </Card>
  );
}
