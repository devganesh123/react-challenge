import React from "react";
import { Button } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const CommonOrders = ({ item, onAddOrder }) => {
  return (
    <Card sx={{ maxWidth: 345 }} key={item.id}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price : ${item.price}
        </Typography>
        <Button
          variant="contained"
          size="small"
          sx={{ marginTop: "10px" }}
          onClick={() => {
            onAddOrder(item.price);
          }}
        >
          Order
        </Button>
      </CardContent>
    </Card>
  );
};

export default CommonOrders;
