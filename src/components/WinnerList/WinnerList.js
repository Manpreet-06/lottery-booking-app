import { Box, Typography } from "@mui/material";
import React from "react";

const WinnerList = ({ winnerListData, winnerList }) => {
  return (
    <Box pl={3}>
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
      {Array(winnerList?.data)?.map((data) => {
        return (
          <>
            <Box
              display={"flex"}
              justifyContent={"space-evenly"}
              alignItems="center"
            >
              <Typography
                style={{ fontSize: "30px", fontWeight: 500, marginTop: "5px" }}
              >
                {data?.bookNumber}
              </Typography>
              <Typography
                style={{ fontSize: "30px", fontWeight: 500, marginTop: "5px" }}
              >
                {data?.pageNumber}
              </Typography>
            </Box>
            <Box display={"flex"} justifyContent={"left"} alignItems="center">
              <img
                src={data?.bookUrl}
                alt=""
                style={{ width: "196px", height: "233px" }}
              />
              <img
                src={data?.pageUrl}
                alt=""
                style={{ width: "150px", height: "200px" }}
              />
            </Box>
          </>
        );
      })}
    </Box>
  );
};

export default WinnerList;
