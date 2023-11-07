import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import "./VerticalCard.scss";

const Cards = ({ bookList }) => {
  return (
    <div>
      <Grid container m={1} className="cards-page" style={{minHeight: "300px"}}>
        {bookList?.map((data, index) => {
          const isLastCard = index === bookList?.length - 1;
          return (
            <Grid
              lg={2.4}
              md={6}
              sm={12}
              xs={12}
              mb={1}
              display="flex"
              alignItems="center"
              flexDirection={"column"}
              style={{ width: "100%" }}
            >
              <Typography className="card-number">{data?.number}</Typography>
              <Card
                className="cards"
                style={{
                  backgroundImage: `url(${data?.imageURL})`,
                  backgroundSize: "100%",
                  ...(isLastCard && { marginLeft: "-11px" }),
                }}
              ></Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Cards;
