import React, { useState } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import REMINDERAPI from "../../ReminderApi";

const ReminderCard = () => {
  const [rem, setRem] = useState(REMINDERAPI.relish_reminder);
  const filterHandler = (id) => {
    console.log(rem);

    setRem(() => rem.filter((item) => item.fact_id !== id));
  };
  const showReminder = () => {
    console.log(REMINDERAPI.relish_reminder);
    setRem(REMINDERAPI.relish_reminder);
  };

  const forgotCopy = (
    <>
      <Typography gutterBottom variant="h4" component="div">
        Dont forget to press ok
      </Typography>
      <Button variant="contained" size="small" onClick={showReminder}>
        OK
      </Button>
    </>
  );

  const stackCopy = (
    <Stack
      direction={{ xs: "row", sm: "row" }}
      spacing={{ xs: 1, sm: 2, md: 2 }}
    >
      {rem.map((item) => (
        <Card sx={{ maxWidth: 345 }} key={item.fact_id}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.desc}
            </Typography>
            <Button
              variant="contained"
              size="small"
              sx={{ marginTop: "10px" }}
              onClick={() => {
                filterHandler(item.fact_id);
              }}
            >
              Not right now
            </Button>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, maxWidth: 500 },
      }}
      noValidate
      autoComplete="off"
    >
      {rem.length < 1 ? forgotCopy : stackCopy}
      {/* {rem.length > 0 && stackCopy} */}
    </Box>
  );
};

export default ReminderCard;
