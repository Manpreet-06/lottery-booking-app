import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import "./VerticalCard.scss";

const Cards = ({ cardData, data, loading, error, fetchData  }) => {
  const handleCardData =() =>{
    const formData = {
      name: "Book 3",
      imageURL: "https://picsum.photos/200/300",
      totalPage: "15",
      number: "3",
      bookSKU: "book3",
    };
    try {
      const response = fetchData(cardData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    
    console.log(data);
  }

  return (
    <div>
      <Grid container m={1} className="cards-page">
        {cardData?.map((data, index) => {
         const isLastCard = index === cardData?.length - 1;
          return (
            <Grid
              lg={6}
              md={6}
              sm={12}
              xs={12}
              mb={1}
              display="flex"
              alignItems="center"
              style={{ width: "100%" }}
            >
              <Grid
                container
                columnGap={1}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"start"}
              >
                <Grid
                  lg={9}
                  md={9}
                  sm={9}
                  xs={9}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Typography className="card-number">{data.id}</Typography>
                  <Card
                    className="cards"
                    style={{
                      backgroundImage: `${data.backgroundImage}`,
                      ...(isLastCard && { marginLeft: "-11px" }),
                    }}
                  ></Card>
                </Grid>
                <Grid lg={2} md={2} sm={2} xs={2}>
                  <Grid
                    display={"flex"}
                    alignItems={"start"}
                    justifyContent={"start"}
                    flexDirection={"column"}
                    style={{ height: "135px" }}
                  >
                    <TextField className="text-input-1" defaultValue="15" />
                    <TextField className="text-input-2" defaultValue="ANY" />
                    <TextField className="text-input-3" defaultValue="7500" />
                    <Button className="pre-book__btn" onClick={handleCardData}>Pre Book</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Cards;
