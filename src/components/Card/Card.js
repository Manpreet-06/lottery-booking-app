import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import "./Card.scss";

const Cards = ({ cardData }) => {
  return (
    <div>
      <Grid container m={1} columnGap={2}>
        {cardData?.map((data) => {
          return (
            <Grid lg={5.8} display="flex" alignItems="center" mb={1}>
              <Typography style={{ margin: "0px 10px", fontSize: "" }}>{data.id}</Typography>
              <Card
                style={{
                  border: "1px solid lightgrey",
                  width: "100%",
                  height: "130px",
                  boxShadow: "none",
                  backgroundImage: `${data.backgroundImage}`,
                  display: "flex",
                  alignItems: "end",
                  justifyContent:"space-around",
                  borderRadius: "10px",
                  padding: "5px"
                }}
              >
                  <TextField className="text-input-1" defaultValue="15" />
                  <TextField className="text-input-2" defaultValue="ANY" />
                  <TextField className="text-input-3" defaultValue="7500" />
                  <Button
                    style={{
                      background: "#A9CBB7",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "white",
                      padding: "10px",
                      borderRadius: "16px",
                      width: "99.638px",
                      height: "50px"
                    }}
                  >
                    Pre Book
                  </Button>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Cards;
