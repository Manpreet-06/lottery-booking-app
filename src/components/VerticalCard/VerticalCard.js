import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "./VerticalCard.scss";
import { bookListData } from "../../services";

const Cards = () => {
  const [cardDataSet, setCardDataSet]= useState();

  React.useEffect(() => {
    (async() => {
      try {
        const response = await bookListData();
        setCardDataSet(response.data);
      } catch (error) {}
       console.log(cardDataSet);
    })()
  }, [])
  

  return (
    <div>
      <Grid container m={1} className="cards-page">
        {cardDataSet?.map((data, index) => {
          const isLastCard = index === cardDataSet?.length - 1;
          const total = (data.totalPage * data.price);
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
                  <Typography className="card-number">{data.number}</Typography>
                  <Card
                    className="cards"
                    style={{
                      backgroundImage: `url(${data.imageURL})`,
                      backgroundSize: "100%",
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
                      <TextField
                        className="text-input-1"
                        name="totalPage"
                        value={data.totalPage}
                      />
                      <TextField
                        className="text-input-2"
                        name="name"
                        value={data.name}
                      />
                      <TextField className="text-input-3" value={total} />
                      <Button
                        className="pre-book__btn"
                      >
                        Pre Book
                      </Button>
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

// const mapStateToProps = (state) => ({
//   data: state?.data?.data,
//   loading: state?.data?.loading,
//   error: state?.data?.error,
// });

export default Cards;
