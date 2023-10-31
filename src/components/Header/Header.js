import { Avatar, Box, Grid, Popover, Typography } from "@mui/material";
import React from "react";
import "./Header.scss";
import { getFromLocalStorage } from "../../utils/localstorage";
import { deepPurple } from "@mui/material/colors";
import { getUserProfile, getWalletBalance } from "../../services";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [userProfile, setUserProfile] = React.useState("");
  const [walletData, setWalletData] = React.useState();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // React.useEffect(() => {
  //  fetchUserProfileData("653dfb643f57fdebb69bcbff");
  //   console.log(data);
  //   console.log(data?.userProfileReducer?.data?.data);
  //   setUserProfile(data?.userProfileReducer?.data?.data);
  // }, []);
  // console.log(userProfile?.first_name?.slice(0, 1));

  React.useEffect(() => {
    const loginId = getFromLocalStorage("loginId");
    console.log(loginId);
    (async () => {
      try {
        const response = await getUserProfile(loginId);
        setUserProfile(response?.data);
        const walletData = await getWalletBalance("653dec2f5068cfd79e725f9e");
        setWalletData(walletData?.data);
      } catch (error) {}
    })();
  }, []);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
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
          <Avatar
            src=""
            sx={{
              width: 30,
              height: 30,
              marginLeft: "10px",
              bgcolor: deepPurple[500],
            }}
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
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   data: state,
//   loading: state,
//   error: state,
// });

// const mapDispatchToProps = (dispatch) => ({
//   fetchUserProfileData,
//   fetchWalletData,
// });

// export default connect(mapStateToProps, { fetchUserProfileData })(Header);

export default Header;
