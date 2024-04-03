import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import classes from "./Header.module.css";

function ResponsiveAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav className={classes.headerNav}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Link to="/">RChallenge</Link>
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                typography: "body1",
                "& > :not(style) ~ :not(style)": {
                  ml: 2,
                },
                marginLeft: "auto",
              }}
            >
              <Link to="/">Home</Link>
              <Button
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{ color: "#ffffff" }}
              >
                30-Day-Challenge
              </Button>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClick={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Link to="/question-answer">Question & Answer</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/shout">Shout @ me</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/color-picker">Color Picker</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/facts">Facts</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/reminder">Relish Reminder</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/thoughts">Thinking Log</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/petlog">Pet Log</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/drink">Drink Order</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/food">Food Order</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/weather">Weather Report</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/quiz">Quiz</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/tictac">TicTac</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/timerfind">TimerFind</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/crudtask">Project Crud</Link>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </nav>
  );
}
export default ResponsiveAppBar;
