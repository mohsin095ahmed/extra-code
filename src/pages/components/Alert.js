import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useRef } from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Alert({seg}) {
  const spanRef = React.useRef();
  let tag = useRef(false)
  const [open, setOpen] = React.useState();
console.log(seg)
  const handleClickOpen = () => {
    tag.current = true;
  };
//setOpen(seg)
if(seg){
  //let num = 1;
  //console.log(num++)
  console.log(spanRef.current, tag)
  spanRef.current.click()
}
  const handleClose = () => {
    tag.current = false;
    console.log(tag.current);
    setOpen(false)
  };

  return (
    <React.Fragment>
      <span ref={spanRef}  onClick={handleClickOpen}>
        
      </span>
      <Dialog
        open={tag.current}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}