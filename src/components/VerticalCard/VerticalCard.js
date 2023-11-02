import { Card, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import "./VerticalCard.scss";
import { bookListData } from "../../services";

const Cards = ({ cardData }) => {
  const [cardDataSet, setCardDataSet] = useState();

  React.useEffect(() => {
    (async () => {
      try {
        const response = await bookListData();
        setCardDataSet(response.data);
      } catch (error) {}
      console.log(cardDataSet);
    })();
  }, []);

  return (
    <div>
      <Grid container m={1} className="cards-page">
        {cardData?.map((data, index) => {
          const isLastCard = index === cardDataSet?.length - 1;
          return (
            <Grid
              lg={2.4}
              md={6}
              sm={12}
              xs={12}
              mb={1}
              display="flex"
              alignItems="center"
              style={{ width: "100%" }}
            >
              <Typography className="card-number">{data?.number}</Typography>
              <Card
                className="cards"
                style={{
                  backgroundImage: `${data?.backgroundImage}`,
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
