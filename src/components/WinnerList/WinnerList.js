import { Box, Typography } from "@mui/material";
import React from "react";

const WinnerList = ({ winnerListData }) => {
  return (
    <Box pl={3}>
      <Typography
        style={{
          fontSize: "20px",
          fontWeight: "700",
          color: "#003F63",
          marginRight: "80px",
        }}
      >
        LUCKY DRAW
      </Typography>
      {winnerListData?.map((data) => {
        return (
          <Box display={"flex"} justifyContent={"left"} alignItems="center">
            <img
              src={data.templateimg}
              alt=""
              style={{ width: "196px", height: "350px" }}
            />
            <img
              src={data.image}
              alt=""
              style={{ width: "150px", height: "200px" }}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default WinnerList;
