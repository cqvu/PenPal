import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import Button from '@material-ui/core/Button';
import Browser from '../images/Browser.png'
import '../styles/MailModal.css';

class MailModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isMatchDay: true};
    }
    handleClick = () => {
        this.setState(state => ({
          isMatchDay: !state.isMatchDay
        }));
      }
    render() {
        const {mail, modalOpen, handleClose} = this.props;
        return (
            <div>
                <Dialog
                    fullWidth={true}
                    maxWidth = {'md'}
                    className="mailModal"
                    open={modalOpen}
                    onClose={handleClose}
                    BackdropProps={{
                        style: {
                            backgroundColor: 'transparent',
                            boxShadow: 'none',
                        }
                    }}
                    PaperProps={{
                        style: {
                          backgroundColor: 'transparent',
                          boxShadow: 'none',
                            left: '12%'
                        },
                      }}>
                        <img src={Browser} width='70%' ></img>
                        <DialogContent style={{backgroundColor:'transparent', position:'fixed', 
                                                top:'41%', left:'32%', maxWidth:'22%', height:'22%'}}>
                        <DialogContentText  id="dialog-description">
                            {mail.text}
                        </DialogContentText>
                    </DialogContent>            
                </Dialog>
            </div>
        )
    }
}

export default MailModal