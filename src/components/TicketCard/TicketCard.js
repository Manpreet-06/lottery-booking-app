import { Box, Card, Typography } from "@mui/material";
import React from "react";

import "./Ticket.scss";
import Nodata from "../NoData/Nodata";

const TicketCard = ({ ticketArray , ticketData}) => {
  return (
    <Box>
      {ticketData?.length >0 ?<><Typography
        style={{
          color: "#003F63",
          fontWeight: "700",
          fontSize: "20px",
          fontFamily: "Roboto Condensed",
        }}
      >
        WINNER LIST
      </Typography><Box className="ticket-box">
          {ticketData?.data?.map((item) => {
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
                    {item?.ticketNo}
                  </Typography>
                  <Typography className="ticket-card__price">
                    {item.price}
                  </Typography>
                </Box>
              </Card>
            );
          })}
        </Box></>: <Nodata />}
    </Box>
  );
};

export default TicketCard;
