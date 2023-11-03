import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import TicketCard from "../../components/TicketCard/TicketCard";
import WinnerList from "../../components/WinnerList/WinnerList";
import LastOpenBook from "../../components/LastOpenBook/LastOpenBook";
import VerticalCard from "../../components/VerticalCard/VerticalCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchWalletData } from "../../Store/actions/walletAction";
import Booking from "../../components/Booking/Booking";
import { gameResultData } from "../../Store/actions/gameresultAction";
import { fetchGamesData } from "../../Store/actions/gameAction";
import { placeOrderData } from "../../Store/actions/placeorderAction";
import { booklistData } from "../../Store/actions/booklistAction";

const Dashboard = ({ data, error, loading, fetchWalletData }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
   dispatch(gameResultData());
   dispatch(placeOrderData());
   dispatch(booklistData());
   dispatch(placeOrderData());
   console.log(state?.placeOrderReducer);
    
  }, [gameResultData, fetchGamesData, booklistData, placeOrderData])
  
 
  const cardData = [
    {
      id: 1,
      input: "15",
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
      templateimg: "/assets/winning.svg"
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

  return (
    <Grid container columnGap={4}>
      <Grid lg={12} sm={12} md={12} xs={12}>
        <VerticalCard cardData={cardData} />
      </Grid>
      <Grid lg={3} sm={12} md={12} xs={12}>
        <WinnerList winnerListData={winnerListData} luckyDraw={state?.gameresultReducer?.data?.data} />
      </Grid>
      <Grid lg={2.5} sm={12} md={12} xs={12}>
         <TicketCard ticketArray={ticketArray} />
      </Grid>
      <Grid lg={2.5} sm={12} md={12} xs={12}>
        <LastOpenBook lastOpenBook={lastOpenBook} />
      </Grid>
      <Grid lg={3} sm={12} md={12} xs={12}>
        <Booking />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
