import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CommonSelect = ({ onChangeHandler, value }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Animal/Species</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Animal/Species"
        value={value}
        onChange={onChangeHandler}
      >
        <MenuItem value={"tiger"}>Tiger</MenuItem>
        <MenuItem value={"lion"}>Lion</MenuItem>
        <MenuItem value={"elephant"}>Elephant</MenuItem>
      </Select>
    </FormControl>
  );
};

export default CommonSelect;
