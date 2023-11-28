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
  const { gameResult, ticketData } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button onClick={handleOpen} style={{backgroundColor: "rgb(0, 63, 99)", color: "#fff"}}>Winner List</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <WinnerList winnerList={gameResult} />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TicketCard ticketData={ticketData} />
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default ModalComponent;
