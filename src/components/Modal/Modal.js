import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import WinnerList from "../WinnerList/WinnerList";
import TicketCard from "../TicketCard/TicketCard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: "80%",
  bgcolor: "background.paper",
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

const ModalComponent = (props) => {
  const { gameResult, ticketData , showModal} = props;
  return (
    <>
      <Modal
        open={showModal}
        onClose={false}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} display="flex" justifyContent={"space-between"}>
          <Typography id="modal-modal-title" variant="h6" component="h2" width="100%">
            <WinnerList winnerList={gameResult} />
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
