import React, { useState } from "react";
import { Button } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import drinkObject from "./drinkObject";
import CommonOrders from "../common/commonOrders";
const DrinkOrder = () => {
  const [total, setTotal] = useState(0);

  const addHandler = (price) => {
    setTotal((prev) => Number(prev) + Number(price));
  };

  const removeHandler = () => {
    setTotal(0);
  };

  return (
    <Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 2 }}
      >
        {drinkObject.map((item) => (
          <CommonOrders item={item} onAddOrder={addHandler}></CommonOrders>
        ))}
      </Stack>
      <Card sx={{ maxWidth: 345, margin: "3rem auto" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Total Bill
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${total}
          </Typography>
          <Button
            variant="contained"
            size="small"
            sx={{ marginTop: "10px" }}
            onClick={removeHandler}
          >
            Pay Now
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DrinkOrder;
