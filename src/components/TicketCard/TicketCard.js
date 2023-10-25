import { Box, Card, Typography } from "@mui/material";
import React from "react";

const TicketCard = () => {
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
    <div>
      {ticketArray?.map((item) => {
        return (
          <Card style={{ padding: "10px", color: "#0c3b5e", margin: '2px', boxShadow: "0px 2px 3px 2px lightgrey" }}>
            <Typography
              style={{ textAlign: "left", fontSize: "16px", fontWeight: 600 }}
            >
              TICKET NUMBER:-
            </Typography>
            <Box
              display="flex"
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography style={{ fontSize: "16px", fontWeight: 600, textAlign: "left" }}>
                {item.ticketNo}
              </Typography>
              <Typography style={{ fontSize: "16px", fontWeight: 600,  textAlign: "left" }}>
                {item.price}
              </Typography>
            </Box>
          </Card>
        );
      })}
    </div>
  );
};

export default TicketCard;
