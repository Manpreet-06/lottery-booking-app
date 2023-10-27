import {
    Button,
    Card,
    Grid,
    Stack,
    TextField,
    Typography,
  } from "@mui/material";
  import React from "react";
  import "./VerticalCard.scss";
  
  const Cards = ({ cardData }) => {
    return (
      <div>
        <Grid container m={1} columnGap={1}>
          {cardData?.map((data) => {
            return (
              <Grid lg={5.8} display="flex" alignItems="center" mb={1} style={{ width: "100%"}}>
                <Typography style={{ margin: "0px 10px", fontSize: "" }}>
                  {data.id}
                </Typography>
                <Card
                  style={{
                    border: "1px solid lightgrey",
                    width: "70%",
                    height: "130px",
                    boxShadow: "none",
                    backgroundImage: `${data.backgroundImage}`,
                    display: "flex",
                    alignItems: "end",
                    justifyContent: "space-around",
                    borderRadius: "10px",
                    padding: "5px",
                  }}
                ></Card>
                <Stack
                  textAlign="center"
                  padding={"5px"}
                  alignItems="center"
                  style={{ height: "135px" }}
                >
                  <TextField className="text-input-1" defaultValue="15" />
                  <TextField className="text-input-2" defaultValue="ANY" />
                  <TextField className="text-input-3" defaultValue="7500" />
                  <Button
                    style={{
                      background: "#A9CBB7",
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "white",
                      padding: "10px",
                      borderRadius: "10px",
                      width: "85px",
                      height: "30px",
                    }}
                  >
                    Pre Book
                  </Button>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  };
  
  export default Cards;
  