import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const Header = () => {
  return (
    <div>
      <Grid
        container
        style={{ backgroundColor: "#0c3b5e", color: "#fff", height: 45 }}
        display={"flex"}
        alignItems="center"
      >
        <Grid lg={1}>
        <img
            src="/assets/Dashboard.svg"
            alt=""
            style={{ width: "25px", height: "25px" }}
          />
        </Grid>
        <Grid lg={7} display="flex" justifyContent={"center"}>
          <img
            src="/assets/clock.png"
            alt=""
            style={{ width: "25px", height: "25px" }}
          />
          <Typography ml={1}> Booking Close in 4:30 Minute </Typography>
        </Grid>
        <Grid lg={1} display="flex" alignItems="center">
          <img
            src="/assets/timer.png"
            alt=""
            style={{ width: "20px", height: "20px" }}
          />
          <Typography style={{ marginLeft: "5px" }}>10:10</Typography>
        </Grid>
        <Grid lg={3} display={"flex"} justifyContent={"flex-end"}>
          <AccountBalanceWalletIcon />
          <Avatar sx={{ width: 24, height: 24, marginLeft: "10px" }} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
