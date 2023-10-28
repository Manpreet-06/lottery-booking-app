import { Avatar, Grid, Popover, Typography } from "@mui/material";
import React from "react";
import "./Header.scss";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div>
      <Grid
        container
        style={{ backgroundColor: "#0c3b5e", color: "#fff", padding: '5px' }}
        className="header"
      >
        <Grid lg={1.5} md={1.5} sm={1.5} xs={2.5} className="header">
          <img src="/assets/Dashboard.svg" alt="" className="header-logo" />
          <Typography className="header-logo__title">Shop1</Typography>
        </Grid>
        <Grid lg={5.5} md={5.5} sm={5.5} xs={9.5} className="clock">
          <img src="/assets/clock.png" alt="" className="clock__img" />
          <Typography ml={1} className="clock__title">
            Booking Close in 4:30 Minute
          </Typography>
        </Grid>
        <Grid lg={2} md={2} sm={2} xs={2.5} className="timer">
          <img src="/assets/timer.png" alt="" className="timer__img" />
          <Typography className="timer__title">10:10</Typography>
        </Grid>
        <Grid lg={2} md={2} sm={2} xs={9.5} className="wallet">
          <img
            src="/assets/clock.svg"
            alt=""
            className="wallet__img"
            onClick={handleClick}
            aria-describedby={id}
          />
          <Avatar sx={{ width: 30, height: 30, marginLeft: "10px" }} />
        </Grid>
      </Grid>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ px: 2 }}>
          Selling Price
        </Typography>
        <Typography sx={{ px: 2 }}>
          Winning Price
        </Typography>
      </Popover>
    </div>
  );
};

export default Header;
