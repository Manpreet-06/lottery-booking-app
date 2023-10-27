import { Box, Card, Typography } from "@mui/material";
import React from "react";

import './Ticket.scss';

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
    <Box
    className="ticket-box"
      style={{
        // padding: 0,
        // margin: 0,
        // height: "200px",
        // overflow: "auto",
        // boxShadow: "none",
        // border: "none",
      }}
    >
      {ticketArray?.map((item) => {
        return (
          <Card
          className="ticket-card"
            style={{
              // padding: "6px",
              // color: "#0c3b5e",
              // margin: "2px",
              // boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.10)",
              // borderRadius: "5px",
            }}
          >
            <Typography
            className="ticket-number-text"
              style={{
                // textAlign: "left",
                // fontSize: "14px",
                // fontWeight: 500,
                // fontFamily: "Roboto Condensed",
              }}
            >
              TICKET NUMBER:-
            </Typography>
            <Box
              display="flex"
              alignItems={"baseline"}
              justifyContent={"space-between"}
            >
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  textAlign: "left",
                  fontFamily: "Roboto Condensed",
                }}
              >
                {item.ticketNo}
              </Typography>
              <Typography
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  textAlign: "left",
                  fontFamily: "Roboto Condensed",
                }}
              >
                {item.price}
              </Typography>
            </Box>
          </Card>
        );
      })}
    </Box>
  );
};

export default TicketCard;
