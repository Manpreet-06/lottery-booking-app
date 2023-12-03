import { Box, Grid, Typography } from "@mui/material";
import "./LastOpenBook.scss";
import Nodata from "../NoData/Nodata";

const LastOpenBook = ({ lastOpenBook, winnerList }) => {
  const bookHistory = winnerList?.bookHistory || [];

  const renderItemsInColumns = (start, end) => {
    return bookHistory.slice(start, end).map((data, index) => (
      <Grid item lg={3.8} key={index}>
        <Box className="total-imgs">
          <Box style={{ position: "relative", margin: '10px' }}>
            <Typography>{data?.bookNumber}</Typography>
            <img
              src={data?.bookUrl}
              alt=""
              className="lastopenbook-img"
            />
          </Box>
          <Box style={{ position: "relative" , marginLeft: '10px'}}>
            <Typography>{data?.pageNumber}</Typography>
            <img
              src={data?.pageUrl}
              alt="" 
              className="template-img"
            />
          </Box>
        </Box>
      </Grid>
    ));
  };

  const renderGrids = () => {
    const grids = [];
    const itemsPerPage = 6;
    const totalItems = bookHistory.length;
    const totalGrids = Math.ceil(totalItems / itemsPerPage);

    for (let i = 0; i < totalGrids; i++) {
      const start = i * itemsPerPage;
      const end = Math.min(start + itemsPerPage, totalItems);
      grids.push(
        <Grid item xs={6} key={i}>
          <Grid container spacing={2}>
            {renderItemsInColumns(start, end)}
          </Grid>
        </Grid>
      );
    }

    return grids;
  };

  return (
    <div className="lastopenbook-page">
      <Box className="lastopenbook-title" mb={2}>
        <Typography>LAST OPEN BOOK</Typography>
      </Box>
      {bookHistory.length > 0 ? (
        <Grid container spacing={2} display="flex">
          {renderGrids()}
        </Grid>
      ) : (
        <Nodata />
      )}
    </div>
  );
};

export default LastOpenBook;
