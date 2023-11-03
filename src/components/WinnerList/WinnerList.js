import { Box, Typography } from "@mui/material";
import React from "react";

const WinnerList = ({ winnerListData, luckyDraw }) => {
  // console.log(luckyDraw);
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
      {winnerListData?.map((data) => {
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
                4
              </Typography>
              <Typography
                style={{ fontSize: "30px", fontWeight: 500, marginTop: "5px" }}
              >
                8
              </Typography>
            </Box>
            <Box display={"flex"} justifyContent={"left"} alignItems="center">
              <img
                src={data.templateimg}
                alt=""
                style={{ width: "196px", height: "233px" }}
              />
              <img
                src={data.image}
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
