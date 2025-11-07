import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { useModal } from "../Context/ModalContext";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AppDialog = () => {
  const { isOpen, closeModal, modalContent, modalProps } = useModal();

  return (
    <Dialog
      fullWidth={true}
      maxWidth="lg"
      open={isOpen}
      slots={{ transition: Transition }}
      keepMounted
      onClose={closeModal}
      aria-describedby="alert-dialog-slide-description"
    >
      {modalProps.title && (
        <DialogTitle id="booking-modal-overlay">{modalProps.title}</DialogTitle>
      )}
      <DialogContent id="booking-content">{modalContent}</DialogContent>
    </Dialog>
  );
};

export default AppDialog;
