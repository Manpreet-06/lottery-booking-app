import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import WinnerList from "../WinnerList/WinnerList";
import TicketCard from "../TicketCard/TicketCard";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "80%",
  bgcolor: "background.paper",
  borderRadius: 4,
  boxShadow: 24,
  p: 1,
};

const ModalComponent = (props) => {
  const { ticketData, open, handleClose, gameResult } = props;
  const { width, height } = useWindowSize();

  return (
    <>
      <Confetti width={width} height={height} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ width: "100%" }}
      >
        <Box sx={style}>
          <Box
            display="flex"
            justifyContent={"space-between"}
            alignItems={"start"}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              width="100%"
            >
              <WinnerList winnerList={gameResult?.data} />
            </Typography>
            <Typography id="modal-modal-description" width="100%">
              <TicketCard
                ticketData={ticketData}
              />
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent={"end"}
            alignItems={"end"}
            mt={7}
            mr={2}
          >
            <Button
              variant="contained"
              style={{ background: "#0c3b5e", color: "fff", boxShadow: "none" }}
              onClick={handleClose}
            >
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ModalComponent;
