import React, { Component } from 'react';
import styles from './HelpDialog.css';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText
} from '@material-ui/core';

type Properties = {};

class HelpDialog extends Component<Properties> {
  render() {
    const { onClose, open } = this.props;

    return (
      <Dialog open={open} onClose={onClose}>
        <DialogContent>
          <DialogContentText>&nbsp;</DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>

          <Button onClick={onClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: true })(HelpDialog);
