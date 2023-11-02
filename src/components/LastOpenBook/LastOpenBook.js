import { Box, Typography } from "@mui/material";
import "./LastOpenBook.scss";

const LastOpenBook = ({ lastOpenBook }) => {
  return (
    <div className="lastopenbook-page">
      <Box className="lastopenbook-title" mb={2}>
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
              <Box>
                <img
                  src={data.rectangleimg}
                  alt=""
                  className="lastopenbook-img"
                />
              </Box>
              <Box>
                <img src={data.templateimg} alt="" className="template-img" />
              </Box>
            </Box>
          </>
        );
      })}
    </div>
  );
};

export default LastOpenBook;
