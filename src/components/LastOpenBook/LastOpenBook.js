import { Box, Typography } from "@mui/material";
import "./LastOpenBook.scss";

const LastOpenBook = ({ lastOpenBook }) => {
  return (
    <div className="lastopenbook-page">
      <Box className="lastopenbook-title">
        <Typography>LAST OPEN BOOK</Typography>
      </Box>
      {lastOpenBook?.map((data) => {
        return (
          <>
            <Box
              display="flex"
              justifyContent="space-around"
              className="total-imgs"
            >
              <Box position={"relative"}>
                <img
                  src={data.rectangleimg}
                  alt=""
                  className="lastopenbook-img"
                />
                <Typography>5</Typography>
              </Box>
              <Box position="relative">
                <img src={data.templateimg} alt="" className="template-img" />
                <Typography>16</Typography>
              </Box>
            </Box>
          </>
        );
      })}
    </div>
  );
};

export default LastOpenBook;
