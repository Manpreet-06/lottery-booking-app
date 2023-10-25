import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import "./Card.scss";

const Cards = ({ cardData }) => {
  return (
    <div>
      <Grid container m={2}>
        {cardData?.map((data) => {
          return (
            <Grid lg={5.8} display="flex" alignItems="center">
              <Typography style={{ margin: "10px" }}>{data.id}</Typography>
              <Card
                style={{
                  border: "1px solid lightgrey",
                  width: "100%",
                  height: "180px",
                  boxShadow: "none",
                }}
              >
                <TextField>{data.input}</TextField>
                <Button>Pre Book</Button>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Cards;
