import { Box, Card, Typography } from "@mui/material";
import React from "react";
import Nodata from "../NoData/Nodata";

import "./Ticket.scss";

const TicketCard = ({ticketData }) => {
  return (
    <Box>
      <>
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
          {ticketData?.length> 0 ? ticketData?.map((item) => {
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
                    {item?.orderId}
                  </Typography>
                  <Typography className="ticket-card__price">
                    {item?.amount}
                  </Typography>
                </Box>
              </Card>
            );
          }): <Nodata />}
        </Box>
      </>
    </Box>
  );
};

export default TicketCard;
