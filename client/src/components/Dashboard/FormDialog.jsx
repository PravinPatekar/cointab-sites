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



export default function FormDialog({open,opens,handleClose,data,error, onChange,handleFormSubmit}) {
 const {id,userName, email, password, confirmPassword}=data


  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{id?(opens?"User profile details":"Update user"):"Create new user"}</DialogTitle>
        {error && (
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    This is an error alert — <strong>{error}</strong>
                </Alert>
            )}
        <DialogContent>
         <form>
             <TextField 
             id="userName" 
             type="text" 
             value={userName} 
             onChange={e=>onChange(e)} 
             placeholder="Enter name" 
             label="User Name" 
             variant="outlined" 
             margin="dense" fullWidth />

             <TextField id="email"
              type="email" 
              value={email} 
              onChange={e=>onChange(e)} 
              placeholder="Enter email" 
              label="Email Id" 
              variant="outlined" 
              margin="dense" fullWidth />

             {opens? "" :
             (<TextField 
             id="password" 
             type="password" 
             value={password} 
             onChange={e=>onChange(e)} 
             placeholder="Enter password" 
             label="Password" 
             variant="outlined"
              margin="dense" fullWidth />)}

             {opens? "" :
             (<TextField 
             id="confirmPassword" 
             type="password" 
             value={confirmPassword} 
             onChange={e=>onChange(e)} 
             placeholder="Enter confirm Password" 
             label="Confirm Password" 
             variant="outlined" 
             margin="dense" fullWidth />)}

         </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            Cancel
          </Button>
          {opens?"":(<Button  color="primary" onClick={()=>handleFormSubmit()} variant="contained">
            {id?"Update":"Submit"}
          </Button>)}
        </DialogActions>
      </Dialog>
    </div>
  );
}