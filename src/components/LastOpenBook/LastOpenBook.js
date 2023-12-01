import { Box, Grid, Typography } from "@mui/material";
import "./LastOpenBook.scss";
import Nodata from "../NoData/Nodata";

const LastOpenBook = ({ lastOpenBook, winnerList }) => {
  return (
    <div className="lastopenbook-page">
      <Box className="lastopenbook-title" mb={2}>
        <Typography>LAST OPEN BOOK</Typography>
      </Box>
      {winnerList?.bookHistory?.length > 0 ? (
        winnerList?.bookHistory?.map((data) => {
          return (
            <>
              <Grid container>
                <Grid lg={4}>
                  <Box
                    display="flex"
                    justifyContent="space-around"
                    className="total-imgs"
                  >
                    <Box style={{ position: "relative" }}>
                      <Typography>{data?.bookNumber}</Typography>
                      <img
                        src={data?.bookUrl}
                        alt=""
                        className="lastopenbook-img"
                      />
                    </Box>
                    <Box style={{ position: "relative" }}>
                      <Typography>{data?.pageNumber}</Typography>
                      <img
                        src={data?.pageUrl}
                        alt=""
                        className="template-img"
                      />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </>
          );
        })
      ) : (
        <Nodata />
      )}
    </div>
  );
};

export default LastOpenBook;
