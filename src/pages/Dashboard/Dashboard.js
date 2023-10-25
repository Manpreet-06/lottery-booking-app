import { Grid } from "@mui/material";
import React from "react";
import Cards from "../../components/Card/Card";
import TicketCard from "../../components/TicketCard/TicketCard";
import WinnerList from "../../components/WinnerList/WinnerList";

const Dashboard = () => {
  const cardData = [
    {
      id: 1,
      image: "",
      input: "15",
      type: "Any",
      backgroundImage: `url("/assets/template2.png")`
    },
    {
      id: 2,
      image: "",
      input: "15",
      type: "Any",
      backgroundImage: `url("/assets/template.png")`
    },
    {
      id: 3,
      image: "",
      input: "15",
      type: "Any",
      backgroundImage: `url("/assets/template.png")`
    },
    {
      id: 4,
      image: "",
      input: "15",
      type: "Any",
      backgroundImage: `url("/assets/template2.png")`
    },
    {
      id: 5,
      image: "",
      input: "15",
      type: "Any",
      backgroundImage: `url("/assets/template2.png")`
    },
    {
      id: 6,
      image: "",
      input: "15",
      type: "Any",
      backgroundImage: `url("/assets/template.png")`
    },
    {
      id: 7,
      image: "",
      input: "15",
      type: "Any",
      backgroundImage: `url("/assets/template.png")`
    },
    {
      id: 8,
      image: "",
      input: "15",
      type: "Any",
      backgroundImage: `url("/assets/template2.png")`
    },
    {
      id: 9,
      image: "",
      input: "15",
      type: "Any",
      backgroundImage: `url("/assets/template2.png")`
    },
    {
      id: 10,
      image: "",
      input: "15",
      type: "Any",
      backgroundImage: `url("/assets/template.png")`
    },
  ];
  return (
      <Grid container spacing={2} mt={0.5}>
        <Grid lg={8}>
          <Cards cardData={cardData} />
        </Grid>
        <Grid lg={4} paddingLeft={6}>
          <WinnerList />
          <TicketCard />
        </Grid>
      </Grid>
  );
};

export default Dashboard;
