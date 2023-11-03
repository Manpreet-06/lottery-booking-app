import { Box, Card, Typography } from "@mui/material";
import React from "react";

import "./Ticket.scss";

const TicketCard = ({ ticketArray }) => {
  return (
    <Box>
      <Typography
        style={{
          color: "#003F63",
          fontWeight: "700",
          fontSize: "20px",
          fontFamily: "Roboto Condensed",
        }}
      >
        WINNER LIST
      </Typography>
      <Box className="ticket-box">
        {ticketArray?.map((item) => {
          return (
            <Card className="ticket-card">
              <Typography className="ticket-number-text">
                TICKET NUMBER:-
              </Typography>
              <Box
                display="flex"
                alignItems={"baseline"}
                justifyContent={"space-between"}
              >
                <Typography className="ticket-card__number">
                  {item.ticketNo}
                </Typography>
                {/* <Typography className="ticket-card__price">
                {item.price}
              </Typography> */}
              </Box>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default TicketCard;
