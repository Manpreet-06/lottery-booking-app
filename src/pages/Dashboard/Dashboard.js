import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import TicketCard from "../../components/TicketCard/TicketCard";
import WinnerList from "../../components/WinnerList/WinnerList";
import LastOpenBook from "../../components/LastOpenBook/LastOpenBook";
import VerticalCard from "../../components/VerticalCard/VerticalCard";
import { connect } from "react-redux";
import { fetchUserProfileData } from "../../Store/actions/userprofileAction";
import { fetchWalletData } from "../../Store/actions/walletAction";

const Dashboard = ({data, error , loading, fetchUserProfileData , fetchWalletData}) => {
  const cardData = [
    {
      id: 1,
      nmae: "15",
      type: "Any",
      backgroundImage: `url("/assets/template2.svg")`,
    },
    {
      id: 2,
      input: "15",
      type: "Any",
      backgroundImage: `url("/assets/template.svg")`,
    },
    {
      id: 3,
      input: "15",
      type: "Any",
      backgroundImage: `url("/assets/template.svg")`,
    },
    {
      id: 4,
      input: "15",
      type: "Any",
      backgroundImage: `url("/assets/template2.svg")`,
    },
    {
      id: 5,
      input: "15",
      type: "Any",
      backgroundImage: `url("/assets/template2.svg")`,
    },
    {
      id: 6,
      input: "15",
      type: "Any",
      backgroundImage: `url("/assets/template.svg")`,
    },
    {
      id: 7,
      input: "15",
      type: "Any",
      backgroundImage: `url("/assets/template.svg")`,
    },
    {
      id: 8,
      input: "15",
      type: "Any",
      backgroundImage: `url("/assets/template2.svg")`,
    },
    {
      id: 9,
      image: "",
      input: "15",
      type: "Any",
      backgroundImage: `url("/assets/template2.svg")`,
    },
    {
      id: 10,
      input: "15",
      type: "Any",
      backgroundImage: `url("/assets/template.svg")`,
    },
  ];
  const winnerListData = [
    {
      id: 1,
      image: "/assets/Rectangle.svg",
    },
  ];
  const lastOpenBook = [
    {
      id: 1,
      rectangleimg: "/assets/image1.svg",
      templateimg: "/assets/rectangle1.svg",
    },
    {
      id: 2,
      rectangleimg: "/assets/image2.svg",
      templateimg: "/assets/rectangle1.svg",
    },
    {
      id: 3,
      rectangleimg: "/assets/image1.svg",
      templateimg: "/assets/rectangle1.svg",
    },
  ];

  const ticketArray = [
    {
      id: 1,
      ticketNo: "RATLMISHOP1_GAME_3_A BCFY123457",
      price: "35000",
    },
    {
      id: 2,
      ticketNo: "RATLMISHOP1_GAME_3_A BCFY123457",
      price: "25000",
    },
    {
      id: 3,
      ticketNo: "RATLMISHOP1_GAME_3_A BCFY123457",
      price: "55000",
    },
  ];

  useEffect(() => {
    fetchUserProfileData();
    fetchWalletData();
    console.log(data);
  }, [fetchUserProfileData, fetchWalletData])

  return (
    <Grid container columnGap={6}>
      <Grid lg={8.5} sm={12} md={12} xs={12}>
        <VerticalCard cardData={cardData} />
      </Grid>
      <Grid lg={3} sm={12} md={12} xs={12}>
        <WinnerList winnerListData={winnerListData} />
        <TicketCard ticketArray={ticketArray} />
        <LastOpenBook lastOpenBook={lastOpenBook} />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  data: state?.data?.data,
  loading: state?.data?.loading,
  error: state?.data?.error,
});

const mapDispatchToProps = {
  fetchUserProfileData,
  fetchWalletData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
