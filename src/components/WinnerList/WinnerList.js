import { Typography } from "@mui/material";
import React from "react";

const WinnerList = ({ winnerListData }) => {
  return (
    <div>
      {winnerListData?.map((data) => {
        return (
          <img
            src={data.image}
            alt=""
            style={{ width: "244px", height: "150px" }}
          />
        );
      })}
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
    </div>
  );
};

export default WinnerList;
