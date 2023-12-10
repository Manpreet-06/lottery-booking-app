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
        {winnerList?.drawResult  ? (
          <>
            <Box
              display={"flex"}
              justifyContent={"start"}
              alignItems="center"
            >
              <Typography
                style={{
                  fontSize: "30px",
                  fontWeight: 500,
                  marginTop: "5px",
                  marginLeft: "80px"
                }}
              >
                {winnerList?.drawResult?.bookNumber}
              </Typography>
              <Typography
                style={{
                  fontSize: "30px",
                  fontWeight: 500,
                  marginTop: "5px",
                  marginLeft: "160px"
                }}
              >
                {winnerList?.drawResult?.pageNumber}
              </Typography>
            </Box>
            <Box display={"flex"} justifyContent={"left"} alignItems="center">
              <img
                src={winnerList?.drawResult?.bookUrl}
                alt=""
                style={{ width: "250px", height: "260px" }}
              />
              <img
                src={winnerList?.drawResult?.pageUrl}
                alt=""
                style={{ width: "200px", height: "230px" }}
              />
            </Box>
          </>
        ) : (
          <Box m={1.4}>
            <Nodata message="No Game Winner" />
          </Box>
        )}
      </>
    </Box>
  );
};

export default WinnerList;
