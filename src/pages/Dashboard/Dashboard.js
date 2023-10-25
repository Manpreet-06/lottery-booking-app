import { Grid } from "@mui/material";
import React from "react";
import Cards from "../../components/Card/Card";
import TicketCard from "../../components/TicketCard/TicketCard";

const Dashboard = () => {
  const cardData = [
    {
      id: 1,
      image: "",
      input: "15",
      type: "Any",
    },
    {
      id: 2,
      image: "",
      input: "15",
      type: "Any",
    },
  ];
  return (
      <Grid container spacing={2} mt={4}>
        <Grid lg={8}>
          <Cards cardData={cardData} />
        </Grid>
        <Grid lg={4}>
          <TicketCard />
        </Grid>
      </Grid>
  );
};

export default Dashboard;
