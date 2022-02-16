import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from "react-hook-form";
import AddIcon from '@mui/icons-material/Add';


import { useDispatch } from 'react-redux';
import { addNewUser, getUsers } from '../../redux/actions';
import { Button, TextField } from '@mui/material';
 const AddUser = () => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { register, handleSubmit, errors, reset } = useForm();
  const { resetForm } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    let newUser = {
      ...data,
    };
    console.log(newUser);
    dispatch(addNewUser(newUser));
    dispatch(getUsers());
    handleClose();
    reset();
  };
  return (
    <div>
      
       <Button
       style={{margin: '0 auto', display: "flex",marginTop:"50px"}}
        // sx={{ mt: 5,textAlign: "center"  }}
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        Add User
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>{"Enter User Information"}</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)} className="form">
           
            <TextField
              id="outlined-basic"
              label="Name"
              type="text"
              variant="outlined"
            
              sx={{ mr: 2 }}
              {...register("name")}
            />

            <TextField
              id="outlined-basic"
              label="Email"
           
              variant="outlined"
              type="text"
              sx={{ mr: 2 }}
              {...register("email")}
            />
            <TextField
              label="Phone"
              type="text"
              variant="outlined"
             
              id="outlined-basic"
              {...register("phone")}
              sx={{ mr: 2 }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleSubmit(onSubmit)}>Save</Button>
        </DialogActions>
      </Dialog>
    
    </div>
  );
};

export default AddUser;
