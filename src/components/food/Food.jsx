import React, { useState } from "react";
import { Button } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import foodObject from "./foodObject";
import CommonOrders from "../common/commonOrders";

const Food = () => {
  const [total, setTotal] = useState(0);

  const foodItems = foodObject.filter((item) => item.type == "foods");
  const juiceItems = foodObject.filter((item) => item.type == "juice");

  const addHandler = (price) => {
    setTotal((prev) => Number(prev) + Number(price));
  };

  const removeHandler = () => {
    let isConfirm = confirm("Are you sure you want to pay?");
    if (isConfirm) {
      setTotal(0);
    }
  };

  return (
    <Box>
      <Typography gutterBottom variant="h3" component="div">
        Food Items
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 2 }}
      >
        {foodItems.map((item, index) => (
          <CommonOrders item={item} key={index} onAddOrder={addHandler} />
        ))}
      </Stack>

      <Typography
        gutterBottom
        variant="h3"
        component="div"
        sx={{ margin: "4rem 0 2rem" }}
      >
        Juice Items
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 2 }}
      >
        {juiceItems.map((item, index) => (
          <CommonOrders item={item} key={index} onAddOrder={addHandler} />
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

export default Food;
