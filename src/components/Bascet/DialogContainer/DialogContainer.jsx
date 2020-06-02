import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import React, { useState } from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import { Button } from '@material-ui/core';

const DialogContainer = ({ open, handleClose }) => {
  const [fields, setFields] = useState({});
  const handleChange = (e) => {
    const copy = { ...fields };
    copy[e.target.id] = e.target.value;
    setFields(copy);
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Հայտ</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Լրացրեք Հայտը։
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Անուն"
          type="text"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="surname"
          label="Ազգանուն"
          type="text"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="phone"
          label="Հեռախոսահամար"
          type="tel"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="address"
          label="Հասցե"
          type="text"
          fullWidth
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Փակել
        </Button>
        <Button onClick={handleClose} color="primary">
          Պահպանել
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogContainer;
