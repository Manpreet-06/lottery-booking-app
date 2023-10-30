import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import "./VerticalCard.scss";
import { Form, Formik } from "formik";
import { booklistData } from "../../Store/actions/booklistAction";
import { connect } from "react-redux";

const Cards = ({ cardData, data, loading, error, booklistData }) => {

  const handleBookListData = () =>{
    booklistData();
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
                <Formik intitalValues={{}} handleSubmit={() => {}}>
                  {(formikProps) => (
                    <>
                      <Grid
                        lg={9}
                        md={9}
                        sm={9}
                        xs={9}
                        display={"flex"}
                        alignItems={"center"}
                      >
                        <Typography className="card-number">
                          {data.id}
                        </Typography>
                        <Card
                          className="cards"
                          style={{
                            backgroundImage: `${data.backgroundImage}`,
                            ...(isLastCard && { marginLeft: "-11px" }),
                          }}
                        ></Card>
                      </Grid>
                      <Grid lg={2} md={2} sm={2} xs={2}>
                      <Form>
                        <Grid
                          display={"flex"}
                          alignItems={"start"}
                          justifyContent={"start"}
                          flexDirection={"column"}
                          style={{ height: "135px" }}
                        >
                            <TextField
                              className="text-input-1"
                              defaultValue="15"
                            />
                            <TextField
                              className="text-input-2"
                              defaultValue="ANY"
                            />
                            <TextField
                              className="text-input-3"
                              defaultValue="7500"
                            />
                            <Button
                              className="pre-book__btn"
                              onClick={handleBookListData}
                            >
                              Pre Book
                            </Button>
                        </Grid>
                        </Form>
                      </Grid>
                    </>
                  )}
                </Formik>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state?.data?.data,
  loading: state?.data?.loading,
  error: state?.data?.error,
});

export default connect(mapStateToProps, { booklistData })(Cards);