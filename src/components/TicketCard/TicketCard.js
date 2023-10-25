import { Card, Typography } from "@mui/material";
import React from "react";

const TicketCard = () => {
  const ticketArray = [
    {
      id: 1,
      ticketNo: "RATLMISHOP1_GAME_3_A",
      price: "35000",
    },
    {
      id: 2,
      ticketNo: "RATLMISHOP1_GAME_3_A",
      price: "25000",
    },
    {
      id: 3,
      ticketNo: "RATLMISHOP1_GAME_3_A",
      price: "55000",
    },
  ];
  return (
    <div>
      {ticketArray?.map((item) => {
        return (
          <Card>
            <Typography>Ticket Number:-</Typography>
            <Typography>{item.ticketNo}</Typography>
            <Typography>{item.price}</Typography>
          </Card>
        );
      })}
    </div>
  );
};

export default TicketCard;
