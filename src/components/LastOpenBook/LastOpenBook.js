import { Box, Typography } from "@mui/material";
import React from "react";

const LastOpenBook = ({ lastOpenBook }) => {
  return (
    <>
      <Typography
        style={{ color: "#003F63", fontWeight: "700", fontSize: "20px", fontFamily:"Roboto Condensed" }}
      >
        LAST OPEN BOOK
      </Typography>
      {lastOpenBook?.map((data) => {
        return (
          <>
            <Box display="flex" justifyContent="space-around">
              <Box position={"relative"}>
                <img
                  src={data.rectangleimg}
                  alt=""
                  style={{
                    width: "147px",
                    height: "99px",
                    marginBottom: "10px",
                  }}
                />
                <Typography
                  position="absolute"
                  top="30%"
                  left="50%"
                  color="#003F63"
                  style={{fontSize: "24px" ,fontWeight:"500" , fontFamily: "Roboto Condensed"}}
                >
                  5
                </Typography>
              </Box>
              <Box position="relative">
              <img
                src={data.templateimg}
                alt=""
                style={{ width: "146px", height: "99px" }}
              />
               <Typography
                  position="absolute"
                  top="30%"
                  left="40%"
                  color="#003F63"
                  
                  style={{fontSize: "24px" ,fontWeight:"500", fontFamily: "Roboto Condensed"}}
                >
                  16
                </Typography>
                </Box>
            </Box>
          </>
        );
      })}
    </>
  );
};

export default LastOpenBook;
