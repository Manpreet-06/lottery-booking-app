import { Avatar, Box, Divider, Grid, Popover, Typography } from "@mui/material";
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
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setInLocalStorage,
} from "../../utils/localstorage";
import { useNavigate } from "react-router";
import { gameResultData } from "../../Store/actions/gameresultAction";
import { logout } from "../../Store/actions/authAction";
import { winnerListData } from "../../Store/actions/winnerlistAction";
import TicketCard from "../TicketCard/TicketCard";
import ModalComponent from "../Modal/Modal";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElAvatar, setAnchorElAvatar] = React.useState(null);
  const [value, setValue] = React.useState("1");
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const state = useSelector((state) => state);
  const mainHistory = state?.walletHistoryReducer?.data?.data?.walletHistory;
  const walletHistory = state?.walletHistoryReducer?.data?.data?.mainHistory;
  const userProfile = state?.userProfileReducer?.data?.data;
  const sellingBalance = state?.userProfileReducer?.data?.data?.walletBalance;
  const winningBalance = state?.userProfileReducer?.data?.data?.mainBalance;
  const winnerList = state?.winnerlistReducer?.data?.data?.winnerList;
  const gameResult = state?.gameresultReducer?.data?.data;
  const gameId = state?.gameReducer?.data?.data?.gameID;
  const [startDateTime, setStartDateTime] = useState();
  const [endDateTime, setEndDateTime] = useState();
  const [showModal, setShowModal] = useState(false);
  const [bookingMessage, setBookingMessage] = useState("");
  const [nextGameMessage, setNextGameMessage] = useState("");
  const [bookingCloseMessage, setBookingCloseMessage] = useState("");

  const [currentTime, setCurrentTime] = useState(new Date());
  const startDateString = state?.gameReducer?.data?.data?.startTime;
  const endTimeString = state?.gameReducer?.data?.data?.startTime;

  useEffect(() => {
    if (startDateString && endTimeString) {
      const startDateString = state?.gameReducer?.data?.data?.startTime;
      const [startHours, startMinutes] = startDateString.split(":").map(Number);
      const startDate = new Date();
      startDate.setHours(startHours);
      startDate.setMinutes(startMinutes);
      startDate.setSeconds(0);

      const formattedStartDate = startDate.toISOString();

      const endTimeString = state?.gameReducer?.data?.data?.endTime;
      const [endHours, endMinutes] = endTimeString.split(":").map(Number);

      const endDate = new Date();
      endDate.setHours(endHours);
      endDate.setMinutes(endMinutes);
      endDate.setSeconds(0);

      const formattedEndTime = endDate.toISOString();

      const startTime = new Date(formattedStartDate);
      const endTime = new Date(formattedEndTime);
      setStartDateTime(startTime);
      setEndDateTime(endTime);
    } else {
    }
  }, [startDateString, endTimeString]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const calculateMessages = () => {
      if (currentTime > startDateTime && currentTime < endDateTime) {
        setBookingMessage("Booking close in");
        setNextGameMessage("");
        setBookingCloseMessage("");
      } else if (currentTime < startDateTime) {
        setNextGameMessage(`Next game starts in`);
        setBookingCloseMessage("");
      } else {
        setBookingCloseMessage("Booking Closed");
        setNextGameMessage("");
        setBookingMessage("");
      }
    };
    calculateMessages();
    const remainingTime = calculateTimeRemaining();

    if (remainingTime === "00:00:00" && bookingMessage === "Booking close in") {
      setShowModal(true);
      dispatch(fetchGamesData());
      dispatch(gameResultData(gameId));
    }
    const modalTimer = setTimeout(() => {
      setShowModal(false);
    }, 1000);

    return () => clearTimeout(modalTimer);
  }, [
    endTimeString,
    currentTime,
    startDateTime,
    showModal,
    gameResultData,
    fetchGamesData,
    gameId,
  ]);

  function formatTime(date) {
    const formattedDate = date.toLocaleDateString();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${formattedDate} ${hours}:${minutes}:${seconds}`;
  }

  const calculateTimeRemaining = () => {
    let remainingTime;
    if (currentTime > startDateTime && currentTime < endDateTime) {
      remainingTime = endDateTime - currentTime;
    } else if (currentTime < startDateTime) {
      remainingTime = startDateTime - currentTime;
    } else if (currentTime === startDateTime) {
      remainingTime = "";
    } else {
      remainingTime = 0;
    }
    const seconds = Math.floor((remainingTime / 1000) % 60);
    const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
    const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleCloseModal = () => {
    setShowModal(false);
    localStorage.setItem("isModalshown", "false");
  };

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
    const data = getFromLocalStorage("loginData");
    dispatch(fetchUserProfileData(data?._id));
    dispatch(walletHistoryData(data?._id));
    dispatch(fetchGamesData());
    dispatch(fetchWalletData(data?._id));
    dispatch(winnerListData(data?._id));
    if (gameId) {
      console.log(gameId);
      setInLocalStorage("gameId", gameId);
    }
    console.log(state?.gameresultReducer?.data?.data);
  }, [
    dispatch,
    fetchUserProfileData,
    walletHistoryData,
    fetchWalletData,
    winnerListData,
  ]);

  const handleLogout = () => {
    dispatch(logout());
    removeFromLocalStorage("loginData");
    removeFromLocalStorage("gameId");
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
          <Typography className="header-logo__title">
            {userProfile?.username}
          </Typography>
        </Grid>
        <Grid lg={3.5} md={5.5} sm={5.5} xs={9.5} className="clock">
          <img src="/assets/clock.png" alt="" className="clock__img" />
          {bookingMessage && showModal === false && (
            <Typography ml={1} fontWeight={600}>
              {bookingMessage}
            </Typography>
          )}
          {nextGameMessage && (
            <Typography ml={1} fontWeight={600}>
              {nextGameMessage}
            </Typography>
          )}
          {bookingCloseMessage && (
            <Typography ml={1} fontWeight={600}>
              {bookingCloseMessage}
            </Typography>
          )}
          <Typography ml={1} className="clock__title">
            {calculateTimeRemaining()}
          </Typography>
          <Typography ml={1} className="clock__title">
            Minutes
          </Typography>
        </Grid>
        <Grid lg={2} md={2} sm={2} xs={2.5} className="timer">
          <img src="/assets/timer.png" alt="" className="timer__img" />
          <Typography className="timer__title">
            {formatTime(currentTime)}
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
          <Box
            ml={1.5}
            mt={0.5}
            display="flex"
            alignItems="center"
            justifyContent={"end"}
          >
            <PowerSettingsNewIcon onClick={handleLogout} />
            <Typography fontSize={14} ml={0.5} fontWeight={600}>
              Logout
            </Typography>
          </Box>
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
        style={{ padding: "10px" }}
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
          <Typography>Selling Balance: </Typography>
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
          <Typography>Winning Balance: </Typography>
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
            {userProfile?.first_name}
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
            {userProfile?.last_name}
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
            {userProfile?.email}
          </Typography>
        </Box>
        <Box sx={{ width: "100%", padding: "10px" }}>
          <Box>
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
              {mainHistory?.length > 0 &&
                mainHistory?.map((data) => {
                  return (
                    <TabPanel
                      value="1"
                      style={{ padding: "0px 25px 10px 0px" }}
                    >
                      <>
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
                        <Divider />
                      </>
                    </TabPanel>
                  );
                })}
              {walletHistory?.length > 0 &&
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
                      <Divider variant="miidle" />
                    </TabPanel>
                  );
                })}
            </TabContext>
          </Box>
          <TicketCard ticketData={winnerList} />
        </Box>
      </Popover>
      {showModal === true && (
        <ModalComponent
          open={true}
          handleClose={handleCloseModal}
          ticketData={winnerList}
          gameResult={gameResult}
        />
      )}
    </div>
  );
};

export default Header;
