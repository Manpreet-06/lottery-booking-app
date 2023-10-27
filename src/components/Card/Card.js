import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import "./Card.scss";

const Cards = ({ cardData }) => {
  return (
    <div className="card-component">
      <Grid container columnGap={2}>
        {cardData?.map((data, index) => {
          const isLastCard = index === cardData?.length - 1;
          return (
            <Grid lg={5.8}  display="flex" alignItems="center" mt={0.1}>
              <Typography className="card-number">{data.id}</Typography>
              <Card
                className="card-content"
                style={{
                  backgroundImage: `${data.backgroundImage}`,
                  ...(isLastCard && { marginLeft: "-12px" }),
                }}
              >
                <TextField className="text-input-1" defaultValue="15" />
                <TextField className="text-input-2" defaultValue="ANY" />
                <TextField className="text-input-3" defaultValue="7500" />
                <Button className="card-button">Pre-Book</Button>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Cards;
