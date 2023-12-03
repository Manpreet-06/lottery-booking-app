import { Box, Modal, Typography } from "@mui/material";
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
  p: 4,
};

const ModalComponent = (props) => {
  const { ticketData, open, handleCloseModal, gameResult } = props;
  const { width, height } = useWindowSize();
  console.log(gameResult);
  return (
    <>
      <Confetti width={width} height={height} />
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ width: "100%" }}
      >
        <Box sx={style} display="flex" justifyContent={"space-between"}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            width="100%"
          >
            <WinnerList winnerList={gameResult?.data} />
          </Typography>
          <Typography id="modal-modal-description" width="100%">
            <TicketCard ticketData={ticketData} />
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default ModalComponent;
