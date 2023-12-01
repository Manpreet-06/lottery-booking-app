import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import LastOpenBook from "../../components/LastOpenBook/LastOpenBook";
import VerticalCard from "../../components/VerticalCard/VerticalCard";
import { useDispatch, useSelector } from "react-redux";
import { gameResultData } from "../../Store/actions/gameresultAction";
import { booklistData } from "../../Store/actions/booklistAction";
import { winnerListData } from "../../Store/actions/winnerlistAction";
import PlaceOrder from "../../components/PlaceOrder/PlaceOrder";
import { fetchGamesData } from "../../Store/actions/gameAction";
import { getFromLocalStorage } from "../../utils/localstorage";

const Dashboard = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const ticketData = state?.winnerlistReducer?.data?.data;
  const bookList = state.booklistReducer?.data?.data;
  const gameId = getFromLocalStorage("gameId");
  const data = getFromLocalStorage("loginData");


  useEffect(() => {
    dispatch(fetchGamesData());
    dispatch(booklistData());
    dispatch(booklistData());
    dispatch(winnerListData(data?._id));
    if(gameId){
    dispatch(gameResultData(gameId));
    }
  }, [
    gameResultData,
    booklistData,
    winnerListData,
    booklistData,
    fetchGamesData,
    gameId,
  ]);

  return (
    <Grid container columnGap={4}>
      <Grid lg={12} sm={12} md={12} xs={12}>
        <VerticalCard bookList={bookList} />
      </Grid>
      <Grid lg={8} sm={12} md={12} xs={12} ml={2}>
        <LastOpenBook winnerList={ticketData} />
      </Grid>
      <Grid lg={3} sm={12} md={12} xs={12}>
        <PlaceOrder
          bookList={bookList}
          gameId={gameId}
        />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
