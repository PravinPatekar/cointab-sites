import { Typography} from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import Alert from '@mui/material/Alert';
// import AlertTitle from '@mui/material/AlertTitle';
import DeleteIcon from '@mui/icons-material/Delete';



export default function Poppup({open, handleClose,data, handleforDelete}) {

  const {id, userName, email} = data

    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">User profile delete confirmation.</DialogTitle>
          <DialogContent>
          <Typography variant="h5" sx={{mt:'30px', mb:"10px", color:"red"}}>Are you sure, you want to delete this user profile.</Typography>
          <Typography variant="h5">User Name : {userName}</Typography>
          <Typography variant="h5">User email Id : {email}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary" variant="outlined">
              Cancel
            </Button>
            <Button  sx={{bgcolor:"red"}} onClick={()=>handleforDelete(id)} variant="contained">
              <DeleteIcon/> Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
}
