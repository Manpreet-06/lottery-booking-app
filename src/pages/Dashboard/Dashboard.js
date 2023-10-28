import { Grid } from "@mui/material";
import React from "react";
import TicketCard from "../../components/TicketCard/TicketCard";
import WinnerList from "../../components/WinnerList/WinnerList";
import LastOpenBook from "../../components/LastOpenBook/LastOpenBook";
import VerticalCard from "../../components/VerticalCard/VerticalCard";

const Dashboard = () => {
  const cardData = [
    {
      id: 1,
      image: "",
      input: "15",
      type: "Any",
      backgroundImage: `url("/assets/template2.svg")`
    },
    {
      id: 2,
      image: "",
      input: "15",
      type: "Any",
      backgroundImage: `url("/assets/template.svg")`
    },
    {
      id: 3,
      image: "",
      input: "15",
      type: "Any",
      backgroundImage: `url("/assets/template.svg")`
    },
    {
      id: 4,
      image: "",
      input: "15",
      type: "Any",
      backgroundImage: `url("/assets/template2.svg")`
    },
    {
      id: 5,
      image: "",
      input: "15",
      type: "Any",
      backgroundImage: `url("/assets/template2.svg")`
    },
    {
      id: 6,
      image: "",
      input: "15",
      type: "Any",
      backgroundImage: `url("/assets/template.svg")`
    },
    {
      id: 7,
      image: "",
      input: "15",
      type: "Any",
      backgroundImage: `url("/assets/template.svg")`
    },
    {
      id: 8,
      image: "",
      input: "15",
      type: "Any",
      backgroundImage: `url("/assets/template2.svg")`
    },
    {
      id: 9,
      image: "",
      input: "15",
      type: "Any",
      backgroundImage: `url("/assets/template2.svg")`
    },
    {
      id: 10,
      image: "",
      input: "15",
      type: "Any",
      backgroundImage: `url("/assets/template.svg")`
    },
  ];
  const winnerListData =[
    {
      id:1,
      image:"/assets/Rectangle.svg"
    }
  ]
  const lastOpenBook = [
    {
      id: 1,
      rectangleimg: "/assets/image1.svg",
      templateimg : "/assets/rectangle1.svg"
    },
    {
      id: 2,
      rectangleimg: "/assets/image2.svg",
      templateimg : "/assets/rectangle1.svg"
    },
    {
      id: 3,
      rectangleimg: "/assets/image1.svg",
      templateimg : "/assets/rectangle1.svg"
    }
  ]
  return (
      <Grid container columnGap={6}>
        <Grid lg={8.5} sm={12} md={12} xs={12}>
          <VerticalCard  cardData={cardData} />
        </Grid>
        <Grid lg={3} sm={12} md={12} xs={12}>
          <WinnerList winnerListData={winnerListData} />
          <TicketCard />
          <LastOpenBook lastOpenBook={lastOpenBook} />
        </Grid>
      </Grid>
  );
};

export default Dashboard;
