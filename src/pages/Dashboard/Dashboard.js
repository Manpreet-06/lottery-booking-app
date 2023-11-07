import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import TicketCard from "../../components/TicketCard/TicketCard";
import WinnerList from "../../components/WinnerList/WinnerList";
import LastOpenBook from "../../components/LastOpenBook/LastOpenBook";
import VerticalCard from "../../components/VerticalCard/VerticalCard";
import { useDispatch, useSelector } from "react-redux";
import Booking from "../../components/Booking/Booking";
import { gameResultData } from "../../Store/actions/gameresultAction";
import { booklistData } from "../../Store/actions/booklistAction";
import { winnerListData } from "../../Store/actions/winnerlistAction";

const Dashboard = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const gameResult = state?.gameresultReducer?.data?.data?.data;
  const ticketData = state?.winnerlistReducer?.data;
  const bookList = state.booklistReducer?.data?.data;

  useEffect(() => {
    dispatch(gameResultData());
    dispatch(booklistData());
    dispatch(winnerListData());
    dispatch(booklistData());
  }, [gameResultData, booklistData, winnerListData, booklistData]);

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
        <VerticalCard bookList={bookList} />
      </Grid>
      <Grid lg={3} sm={12} md={12} xs={12}>
        <WinnerList
          winnerList={gameResult}
        />
      </Grid>
      <Grid lg={2.5} sm={12} md={12} xs={12}>
        <TicketCard ticketArray={ticketArray} ticketData={ticketData} />
      </Grid>
      <Grid lg={2.5} sm={12} md={12} xs={12}>
        <LastOpenBook winnerList={gameResult} />
      </Grid>
      <Grid lg={3} sm={12} md={12} xs={12}>
        <Booking bookList={bookList} />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
