import { Avatar, Box, Button, Grid, Popover, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Header.scss";
import Tab from "@mui/material/Tab";
import { deepPurple } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfileData } from "../../Store/actions/userprofileAction";
import { walletHistoryData } from "../../Store/actions/wallethistoryAction";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { fetchGamesData } from "../../Store/actions/gameAction";
import { fetchWalletData } from "../../Store/actions/walletAction";
import { getFromLocalStorage } from "../../utils/localstorage";
import Nodata from "../NoData/Nodata";
import { useNavigate } from "react-router";
import { gameResultData } from "../../Store/actions/gameresultAction";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElAvatar, setAnchorElAvatar] = React.useState(null);
  const [value, setValue] = React.useState("1");
  const navigate = useNavigate();
  const [userDetail, setUserDetails] = useState();
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const state = useSelector((state) => state);
  const mainHistory = state?.walletHistoryReducer?.data?.data?.mainHistory;
  const walletHistory = state?.walletHistoryReducer?.data?.data?.walletHistory;
  const userProfile = state?.userProfileReducer?.data?.data;
  const startTimeString = state?.gameReducer?.data?.data?.startTime || "";
  const endTimeString = state?.gameReducer?.data?.data?.endTime || "";
  const sellingBalance = state?.walletReducer?.data?.data?.mainBalance;
  const winningBalance = state?.walletReducer?.data?.data?.walletBalance;

  const startTimeParts = startTimeString?.split(":");
  const endTimeParts = endTimeString?.split(":");

  const startHour = parseInt(startTimeParts[0], 10);
  const startMinute = parseInt(startTimeParts[1], 10);
  const endHour = parseInt(endTimeParts[0], 10);
  const endMinute = parseInt(endTimeParts[1], 10);

  const totalStartMinutes = startHour * 60 + startMinute;
  const totalEndMinutes = endHour * 60 + endMinute;
  const timeDifference = totalEndMinutes - totalStartMinutes;
  const [timer, setTimer] = useState(timeDifference * 60);

  const currentTime = new Date();

  const istOptions = {
    timeZone: "Asia/Kolkata",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  };

  const formattedTime = currentTime.toLocaleTimeString("en-IN", istOptions);

  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickAvatar = (event) => {
    setAnchorElAvatar(event.currentTarget);
  };

  const handleCloseAvatar = () => {
    setAnchorElAvatar(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

 useEffect(() => {
  try {
    const userData = getFromLocalStorage("loginData");
    console.log("85 line" ,userData);
  } catch (error) {
    console.error("Error fetching userData:", error);
  }
 }, [])
 

  useEffect(() => {
    // setUserDetails(userData);
    dispatch(fetchUserProfileData("653dec2f5068cfd79e725f9e"));
    dispatch(walletHistoryData("653dec2f5068cfd79e725f9e"));
    dispatch(fetchGamesData());
    dispatch(fetchWalletData("653dec2f5068cfd79e725f9e"));
    dispatch(gameResultData());
  }, [
    dispatch,
    fetchUserProfileData,
    walletHistoryData,
    fetchGamesData,
    fetchWalletData,
    gameResultData
  ]);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          clearInterval(countdownInterval);
          return 0;
        } else {
          return prevTimer - 1;
        }
      });
    }, 1000);
    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  const formatTime = (timer) => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    const bookingTime = new Date(0, 0, 0, 0, minutes, seconds).toLocaleString(
      [],
      { minute: "2-digit", second: "2-digit" }
    );

    return bookingTime;
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div>
      <Grid
        container
        style={{ backgroundColor: "#0c3b5e", color: "#fff", padding: "5px" }}
        className="header"
      >
        <Grid lg={2.5} md={1.5} sm={1.5} xs={2.5} className="header">
          <img src="/assets/Dashboard.svg" alt="" className="header-logo" />
          <Typography className="header-logo__title">{userProfile?.username}</Typography>
        </Grid>
        <Grid lg={3.5} md={5.5} sm={5.5} xs={9.5} className="clock">
          <img src="/assets/clock.png" alt="" className="clock__img" />
          <Typography ml={1} className="clock__title">
            Booking Close in{" "}
            {timeDifference.length > 0 ? formatTime(timer) : "00"} Minute
          </Typography>
        </Grid>
        <Grid lg={1.5} md={2} sm={2} xs={2.5} className="timer">
          <img src="/assets/timer.png" alt="" className="timer__img" />
          <Typography className="timer__title">{formattedTime}</Typography>
        </Grid>
        <Grid lg={2} md={2} sm={2} xs={9.5} className="wallet">
          <img
            src="/assets/clock.svg"
            alt=""
            className="wallet__img"
            onClick={handleClick}
            aria-describedby={id}
          />
          <Avatar
            src=""
            sx={{
              width: 30,
              height: 30,
              marginLeft: "10px",
              bgcolor: deepPurple[500],
              cursor: "pointer",
            }}
            onClick={handleClickAvatar}
          >
            {userProfile?.first_name?.toUpperCase().slice(0, 1)}
          </Avatar>
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
        <Box
          display="flex"
          px={2}
          sx={{
            pr: "10px",
            fontSize: "14px",
            fontWeight: 600,
            color: "#0c3b5e",
          }}
        >
          <Typography>Selling Balance:</Typography>
          <Typography>{sellingBalance}</Typography>
        </Box>
        <Box
          display="flex"
          px={2}
          justifyContent={"space-between"}
          sx={{
            pr: "10px",
            fontSize: "14px",
            fontWeight: 600,
            color: "#0c3b5e",
          }}
        >
          <Typography>Winning Balance:</Typography>
          <Typography>{winningBalance}</Typography>
        </Box>
      </Popover>
      <Popover
        id="avatar-popover"
        open={Boolean(anchorElAvatar)}
        anchorEl={anchorElAvatar}
        onClose={handleCloseAvatar}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box
          sx={{ padding: "10px" }}
          display="flex"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography style={{ fontSize: "14px" }}>First Name</Typography>
          <Typography style={{ fontSize: "14px", color: "#0c3b5e" }}>
            {userDetail?.first_name}
          </Typography>
        </Box>
        <Box
          sx={{ padding: "10px" }}
          display="flex"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography style={{ fontSize: "14px" }}>Last Name</Typography>
          <Typography style={{ fontSize: "14px", color: "#0c3b5e" }}>
            {userDetail?.last_name}
          </Typography>
        </Box>
        <Box
          sx={{ padding: "10px" }}
          display="flex"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography style={{ fontSize: "14px" }}>Email</Typography>
          <Typography style={{ fontSize: "14px", color: "#0c3b5e" }}>
            {userDetail?.email}
          </Typography>
        </Box>
        <Box sx={{ width: "100%", padding: "10px" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Selling Balance History" value="1" />
                  <Tab label="Winning Balance History" value="2" />
                </TabList>
              </Box>
              {mainHistory?.length > 0 ? (
                mainHistory?.map((data) => {
                  return (
                    <TabPanel
                      value="1"
                      style={{ padding: "0px 25px 10px 0px" }}
                    >
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography style={{ fontSize: "14px" }}>
                          Amount
                        </Typography>
                        <Typography
                          style={{ fontSize: "14px", color: "#0c3b5e" }}
                        >
                          {data?.amount}
                        </Typography>
                      </Box>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography style={{ fontSize: "14px" }}>
                          Balance Type
                        </Typography>
                        <Typography
                          style={{ fontSize: "14px", color: "#0c3b5e" }}
                        >
                          {data?.balanceType}
                        </Typography>
                      </Box>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography style={{ fontSize: "14px" }}>
                          Mode
                        </Typography>
                        <Typography
                          style={{ fontSize: "14px", color: "#0c3b5e" }}
                        >
                          {data?.mode}
                        </Typography>
                      </Box>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography style={{ fontSize: "14px" }}>
                          Transaction Type
                        </Typography>
                        <Typography
                          style={{ fontSize: "14px", color: "#0c3b5e" }}
                        >
                          {data?.transactionType}
                        </Typography>
                      </Box>
                    </TabPanel>
                  );
                })
              ) : (
                <Nodata />
              )}
              {walletHistory?.length > 0 ? (
                walletHistory?.map((data) => {
                  return (
                    <TabPanel value="2">
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography style={{ fontSize: "14px" }}>
                          Amount
                        </Typography>
                        <Typography
                          style={{ fontSize: "14px", color: "#0c3b5e" }}
                        >
                          {" "}
                          {data?.amount}
                        </Typography>
                      </Box>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography style={{ fontSize: "14px" }}>
                          Balance Type
                        </Typography>
                        <Typography
                          style={{ fontSize: "14px", color: "#0c3b5e" }}
                        >
                          {data?.balanceType}
                        </Typography>
                      </Box>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography style={{ fontSize: "14px" }}>
                          Mode
                        </Typography>
                        <Typography
                          style={{ fontSize: "14px", color: "#0c3b5e" }}
                        >
                          {data?.mode}
                        </Typography>
                      </Box>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography style={{ fontSize: "14px" }}>
                          Transaction Type
                        </Typography>
                        <Typography
                          style={{ fontSize: "14px", color: "#0c3b5e" }}
                        >
                          {data?.transactionType}
                        </Typography>
                      </Box>
                    </TabPanel>
                  );
                })
              ) : (
                <Nodata />
              )}
            </TabContext>
          </Box>
        </Box>
        <Button
          onClick={handleLogout}
          style={{ fontSize: "14px", padding: "0px 0px 10px 10px" }}
        >
          Log Out
        </Button>
      </Popover>
    </div>
  );
};

export default Header;
