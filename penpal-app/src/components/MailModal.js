import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import '../styles/MailModal.css'

class MailModal extends React.Component {
    render() {
        const {modalOpen, handleClose} = this.props;
        return (
            <div>
                <Dialog
                    className="mailModal"
                    open={modalOpen}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                          backgroundColor: 'black',
                          boxShadow: 'none',
                          width: '100vw',
                          height: '50vh'
                        },
                      }}>
                        <DialogContent>
                        <DialogContentText id="dialog-description">
                            This is the email content :D
                        </DialogContentText>
                    </DialogContent>            
                </Dialog>
            </div>
        )
    }
}

export default MailModal