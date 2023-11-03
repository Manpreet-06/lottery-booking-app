import { Avatar, Box, Grid, Paper, Popover, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Header.scss";
import Tab from "@mui/material/Tab";
import { deepPurple } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfileData } from "../../Store/actions/userprofileAction";
import { walletHistoryData } from "../../Store/actions/wallethistoryAction";
import styled from "@emotion/styled";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { fetchGamesData } from "../../Store/actions/gameAction";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElAvatar, setAnchorElAvatar] = React.useState(null);
  const [walletData, setWalletData] = React.useState();
  const [value, setValue] = React.useState("1");
  const [timer, setTimer] = useState(10 * 60);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const state = useSelector((state) => state);
  const mainHistory = state?.walletHistoryReducer?.data?.data?.mainHistory;
  const walletHistory = state?.walletHistoryReducer?.data?.data?.walletHistory;
  const userProfile = state?.userProfileReducer?.data?.data;
  const startTimeString = state?.gameReducer?.data?.data?.startTime || "";
  const endTimeString = state?.gameReducer?.data?.data?.endTime || "";

  const startTimeParts = startTimeString?.split(":");
  const endTimeParts = endTimeString?.split(":");

  const startHour = parseInt(startTimeParts[0], 10);
  const startMinute = parseInt(startTimeParts[1], 10);
  const endHour = parseInt(endTimeParts[0], 10);
  const endMinute = parseInt(endTimeParts[1], 10);

  const totalStartMinutes = startHour * 60 + startMinute;
  const totalEndMinutes = endHour * 60 + endMinute;
  const timeDifference = totalEndMinutes - totalStartMinutes;

  const formattedTimeDifference = `${timeDifference} minutes`;

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
    //  const userData = getFromLocalStorage("loginData");
    dispatch(fetchUserProfileData("653dfb643f57fdebb69bcbff"));
    dispatch(walletHistoryData());
    dispatch(fetchGamesData());
    console.log(state?.gameReducer?.data?.data);
  }, [dispatch, fetchUserProfileData, walletHistoryData, fetchGamesData]);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          clearInterval(countdownInterval);
          return 10 * 60;
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

    const formattedTime = new Date(0, 0, 0, 0, minutes, seconds).toLocaleString(
      [],
      { minute: "2-digit", second: "2-digit" }
    );

    return formattedTime;
  };

  return (
    <div>
      <Grid
        container
        style={{ backgroundColor: "#0c3b5e", color: "#fff", padding: "5px" }}
        className="header"
      >
        <Grid lg={1.5} md={1.5} sm={1.5} xs={2.5} className="header">
          <img src="/assets/Dashboard.svg" alt="" className="header-logo" />
          <Typography className="header-logo__title">Shop1</Typography>
        </Grid>
        <Grid lg={5.5} md={5.5} sm={5.5} xs={9.5} className="clock">
          <img src="/assets/clock.png" alt="" className="clock__img" />
          <Typography ml={1} className="clock__title">
            Booking Close in {formatTime(timer)} Minute
          </Typography>
        </Grid>
        <Grid lg={2} md={2} sm={2} xs={2.5} className="timer">
          <img src="/assets/timer.png" alt="" className="timer__img" />
          <Typography className="timer__title">
            {formattedTimeDifference}
          </Typography>
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
          <Typography>{walletData?.mainBalance}</Typography>
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
          <Typography>{walletData?.walletBalance}</Typography>
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
          <Typography>First Name</Typography>
          <Typography>Manpreet</Typography>
        </Box>
        <Box
          sx={{ padding: "10px" }}
          display="flex"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography>Last Name</Typography>
          <Typography>Arora</Typography>
        </Box>
        <Box
          sx={{ padding: "10px" }}
          display="flex"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography>Email</Typography>
          <Typography>aroramanpreet316@gmial.com</Typography>
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
              {mainHistory?.map((data) => {
                return (
                  <TabPanel value="1">
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography>Amount</Typography>
                      <Typography>{data?.amount}</Typography>
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography>Balance Type</Typography>
                      <Typography>{data?.balanceType}</Typography>
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography>Mode</Typography>
                      <Typography>{data?.mode}</Typography>
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography>Transaction Type</Typography>
                      <Typography>{data?.transactionType}</Typography>
                    </Box>
                  </TabPanel>
                );
              })}
              {walletHistory?.map((data) => {
                return (
                  <TabPanel value="2">
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography>Amount</Typography>
                      <Typography>{data?.amount}</Typography>
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography>Balance Type</Typography>
                      <Typography>{data?.balanceType}</Typography>
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography>Mode</Typography>
                      <Typography>{data?.mode}</Typography>
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography>Transaction Type</Typography>
                      <Typography>{data?.transactionType}</Typography>
                    </Box>
                  </TabPanel>
                );
              })}
            </TabContext>
          </Box>
        </Box>
      </Popover>
    </div>
  );
};

export default Header;
