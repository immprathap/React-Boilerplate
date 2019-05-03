import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AlertDialog extends React.Component{
      render() {
     const {title,content,action,open} =this.props;
         return (
      <div>
        <Dialog
          open={open}
        //   onClose={}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
             {content}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {action}
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;