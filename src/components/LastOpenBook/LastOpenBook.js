import { Box, Typography } from "@mui/material";
import "./LastOpenBook.scss";

const LastOpenBook = ({ lastOpenBook, winnerList }) => {
  return (
    <div className="lastopenbook-page">
      <Box className="lastopenbook-title" mb={2}>
        <Typography>LAST OPEN BOOK</Typography>
      </Box>
      {winnerList?.bookHistory?.map((data) => {
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
      })}
    </div>
  );
};

export default LastOpenBook;
