import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from "react-hook-form";

import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { editUser, getAllUsers, getUsers } from '../../redux/actions';
import { Button, TextField } from '@mui/material';

const EditUser = ({user}) => {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const handleClickOpen = () => {
      setOpen(true);
      
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const { register, handleSubmit, errors ,reset} = useForm();
    const { resetForm } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    let newUser = {
      ...data,
      _id:user._id
      
      
    };
    console.log(newUser)
    dispatch(editUser(newUser))
    dispatch(getUsers())
    handleClose()
   reset();
  
  
  };
  return (
    <div>
         <EditIcon onClick={handleClickOpen} color="primary" />
        <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle >
                      {"Enter User Information"}
                    </DialogTitle>
                    <DialogContent>
                    <form  onSubmit={handleSubmit(onSubmit)} className='form'>
                     {/* <TextField
               id="outlined-basic"
               label="Id"
               type="text"
               variant="outlined"
               defaultValue={user._id}
              sx={{mr:2}}
               {...register("_id")}
             />  */}
                 <TextField
               id="outlined-basic"
               label="Name"
               type="text"
               variant="outlined"
               defaultValue={user.name}
              sx={{mr:2}}
               {...register("name")}
             />
     
                  <TextField
                  id="outlined-basic"
                   label="Email"
                   defaultValue={user.email}
                   variant="outlined"
                   type="text"
                   sx={{mr:2}}
                   {...register("email")}
                  
                 />
                <TextField
                   label="Phone"
                   type="text"
                   variant="outlined"
                   defaultValue={user.phone}
                   id="outlined-basic"
                   {...register("phone")}
                   sx={{mr:2}}
                 />
              
           
               
              </form>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Disagree</Button>
                      <Button onClick={handleSubmit(onSubmit)}>
                        Save
                      </Button>
                    </DialogActions>
                  </Dialog> 
        </div>
  )
}

export default EditUser