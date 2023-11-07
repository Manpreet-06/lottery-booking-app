import { Box, Typography } from "@mui/material";
import "./LastOpenBook.scss";
import Nodata from "../NoData/Nodata";

const LastOpenBook = ({ lastOpenBook, winnerList }) => {
  return (
    <div className="lastopenbook-page">
      <Box className="lastopenbook-title" mb={2}>
        <Typography>LAST OPEN BOOK</Typography>
      </Box>
      {winnerList?.bookHistory?.length> 0 ?winnerList?.bookHistory?.map((data) => {
        return (
          <>
            <Box
              display="flex"
              justifyContent="space-around"
              className="total-imgs"
            >
              <Box style={{position: "relative"}}>
                <img src={data?.bookUrl} alt="" className="lastopenbook-img" />
                <Typography position={"absolute"}>{data?.bookNumber}</Typography>
              </Box>
              <Box style={{position: "relative"}}>
                <img src={data?.pageUrl} alt="" className="template-img" />
                <Typography position={"absolute"}>{data?.pageNumber}</Typography>
              </Box>
            </Box>
          </>
        );
      }): <Nodata />}
    </div>
  );
};

export default LastOpenBook;
