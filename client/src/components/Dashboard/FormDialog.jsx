import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';



export default function FormDialog({open,handleClose,data,error, onChange,handleFormSubmit}) {
 const {id,fname,lname,subjects,number}=data

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{id?"Update user":"Create new user"}</DialogTitle>
        {error && (
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    This is an error alert — <strong>{error}</strong>
                </Alert>
            )}
        <DialogContent>
         <form>
             <TextField id="fname" value={fname} onChange={e=>onChange(e)} placeholder="Enter name" label="First Name" variant="outlined" margin="dense" fullWidth />
             <TextField id="lname" value={lname} onChange={e=>onChange(e)} placeholder="Enter email" label="Last Name" variant="outlined" margin="dense" fullWidth />
             <TextField id="subjects" value={subjects} onChange={e=>onChange(e)} placeholder="Enter subject" label="Subjects" variant="outlined" margin="dense" fullWidth />
             <TextField id="number" value={number} onChange={e=>onChange(e)} placeholder="Enter number" label="Number" variant="outlined" margin="dense" fullWidth />
         </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            Cancel
          </Button>
          <Button  color="primary" onClick={()=>handleFormSubmit()} variant="contained">
            {id?"Update":"Submit"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}