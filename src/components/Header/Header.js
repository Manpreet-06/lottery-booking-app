import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const Header = () => {
  return (
    <div>
      <Grid
        container
        style={{ backgroundColor: "#0c3b5e", color: "#fff", height: 40 }}
        display={"flex"}
        alignItems="center"
      >
        <Grid lg={1}>Logo</Grid>
        <Grid lg={7} display="flex" justifyContent={"center"}>
          <AlarmOnIcon />
          <Typography ml={1}> Booking Close in 4:30 Minute </Typography>
        </Grid>
        <Grid lg={1} display="flex">
          <AccessTimeOutlinedIcon />
          <Typography>10:10</Typography>
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
