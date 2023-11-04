import { Card, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import "./VerticalCard.scss";
import { bookListData } from "../../services";

const Cards = ({ cardData, booklist }) => {
  const [cardDataSet, setCardDataSet] = useState();

  React.useEffect(() => {
    (async () => {
      try {
        const response = await bookListData();
        setCardDataSet(response?.data);
      } catch (error) {}
    })();
  }, []);

  return (
    <div>
      <Grid container m={1} className="cards-page">
        {cardDataSet?.map((data, index) => {
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
              flexDirection={"column"}
              style={{ width: "100%", minHeight: "370px" }}
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
