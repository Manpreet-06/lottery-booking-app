import { Box, Popover, Typography } from "@mui/material";
import React from "react";

const Modal = ({ props }) => {
  const [id, open, anchorEl, handleClose] = props;
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      {props.description}
    </Popover>
  );
};

export default Modal;
