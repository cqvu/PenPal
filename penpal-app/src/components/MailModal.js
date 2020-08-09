import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class MailModal extends React.Component {
    render() {
        const {modalOpen, handleClose} = this.props;
        return (
            <div>
                <Dialog 
                    className="mailModal"
                    open={modalOpen}
                    onClose={handleClose}>
                    <DialogTitle id="alert-dialog-title">Use Google's location service?</DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Let Google help apps determine location. This means sending anonymous location data to
                            Google, even when no apps are running.
                        </DialogContentText>
                    </DialogContent>            
                </Dialog>
            </div>
        )
    }
}

export default MailModal