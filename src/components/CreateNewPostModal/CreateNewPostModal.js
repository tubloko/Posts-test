import React, {useState} from 'react';
import { TextField, makeStyles, Box, Button, TextareaAutosize, Typography } from "@material-ui/core";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {generateId} from "../../utils/generateId";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    width: 'auto',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const CreateNewPostModal = ({ openModal, setOpenModal, createNewPost }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const classes = useStyles();

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = generateId();
    createNewPost({ title, description, id });
    handleClose();
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className={classes.paper}>
            <form onSubmit={handleSubmit}>
              <TextField
                size="medium"
                label="Title"
                required={true}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Box mt={5} />
              <Typography>Description</Typography>
              <TextareaAutosize
                rows={20}
                cols={100}
                value={description}
                required={true}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Box>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Save</Button>
              </Box>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default CreateNewPostModal;