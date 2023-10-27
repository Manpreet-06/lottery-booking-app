import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <div>
      <Grid
        container
        style={{ backgroundColor: "#0c3b5e", color: "#fff", height: 45 }}
        display={"flex"}
        alignItems="center"
        justifyContent={"space-around"}
      >
        <Grid
          lg={1.5}
          md={1.5}
          sm={1.5}
          xs={1.5}
          display="flex"
          justifyContent={"space-around"}
          alignItems="center"
        >
          <img
            src="/assets/Dashboard.svg"
            alt=""
            style={{ width: "27px", height: "32px" }}
          />
          <Typography
            style={{
              fontSize: "18px",
              fontWeight: "700",
              fontFamily: "Roboto Condensed",
            }}
          >
            Shop1
          </Typography>
        </Grid>
        <Grid
          lg={5.5}
          md={5.5}
          sm={5.5}
          xs={5.5}
          display="flex"
          justifyContent={"center"}
          alignItems="center"
        >
          <img
            src="/assets/clock.png"
            alt=""
            style={{ width: "25px", height: "25px" }}
          />
          <Typography
            ml={1}
            style={{
              fontSize: "18px",
              fontWeight: "700",
              fontFamily: "Roboto Condensed",
            }}
          >
            Booking Close in 4:30 Minute
          </Typography>
        </Grid>
        <Grid lg={2} md={2} sm={2} xs={2} display="flex" alignItems="center">
          <img
            src="/assets/timer.png"
            alt=""
            style={{ width: "30px", height: "31px", fontWeight: "700" }}
          />
          <Typography
            style={{
              marginLeft: "5px",
              fontSize: "18px",
              fontWeight: "700",
              fontFamily: "Roboto Condensed",
            }}
          >
            10:10
          </Typography>
        </Grid>
        <Grid
          lg={2}
          md={2}
          sm={2}
          xs={2}
          display={"flex"}
          justifyContent={"flex-end"}
          alignItems={"center"}
        >
          <img
            src="/assets/clock.svg"
            alt=""
            style={{ width: "30px", height: "30px" }}
          />
          <Avatar sx={{ width: 30, height: 30, marginLeft: "10px" }} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
