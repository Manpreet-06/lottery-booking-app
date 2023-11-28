import { Box, Typography } from "@mui/material";
import React from "react";
import Nodata from "../NoData/Nodata";

const WinnerList = ({ winnerList }) => {
  return (
    <Box pl={3}>
      <>
        <Typography
          style={{
            fontSize: "20px",
            fontWeight: "700",
            color: "#003F63",
            marginRight: "40px",
          }}
        >
          LUCKY DRAW
        </Typography>
        {winnerList?.drawResult ?
          <>
            <Box
              display={"flex"}
              justifyContent={"space-evenly"}
              alignItems="center"
            >
              <Typography
                style={{
                  fontSize: "30px",
                  fontWeight: 500,
                  marginTop: "5px",
                }}
              >
                {winnerList?.drawResult?.bookNumber}
              </Typography>
              <Typography
                style={{
                  fontSize: "30px",
                  fontWeight: 500,
                  marginTop: "5px",
                }}
              >
                {winnerList?.drawResult?.pageNumber}
              </Typography>
            </Box>
            <Box display={"flex"} justifyContent={"left"} alignItems="center">
              <img
                src={winnerList?.drawResult?.bookUrl}
                alt=""
                style={{ width: "196px", height: "233px" }}
              />
              <img
                src={winnerList?.drawResult?.pageUrl}
                alt=""
                style={{ width: "150px", height: "200px" }}
              />
            </Box>
          </>
        : <Nodata />}
      </>
    </Box>
  );
};

export default WinnerList;
