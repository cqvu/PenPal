import React from 'react'
import MailModal from '../components/MailModal'
import firebase from "../components/firebase";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import '../styles/MailList.css'

class MailList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mailList : [
                {"date": "Monday, August 6 6:21PM", "text": "Hello"},
                {"date": "Tuesday, August 7 9:32AM", "text": "Hello againnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn\nMy name is Anon Alien"},
                {"date": "Wednesday, August 8 5:45PM", "text": "Bye"}
            ],
            modalOpen : false,
            openMail : {}
        }
    }
    
    // async componentDidMount() {
    //     const currentUser = firebase.getCurrentEmail();
    //     const userRef = firebase.db.collection('User').doc(currentUser);
    //     const doc = await userRef.get();
    //     if (!doc.exists) {
    //         console.log(currentUser + " doesn't exist!");
    //     } else {
    //         const data = doc.data();
    //         this.setState({mailList: data.letters})
    //     }
    // }

    mailModalOpen = (mail) => {
        this.setState({ modalOpen: true, openMail: mail })
    }

    mailModalClose = () => {
        this.setState({ modalOpen: false})
    }

    render() {
        const {mailListOpen, handleClose} = this.props;
        return(
            <div>
                <Dialog
                    fullWidth={true}
                    maxWidth = {'md'}
                    className="mailModal"
                    open={mailListOpen}
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
                        },
                      }}>
                <div className="mailListContainer">
                    {this.state.mailList.map((mail, index) => 
                        <MailEntry mail={mail} handleClick={ () => this.mailModalOpen(mail)}></MailEntry>
                    )}
                </div>
                </Dialog>
                <MailModal mail={this.state.openMail} modalOpen={this.state.modalOpen} handleClose={this.mailModalClose}></MailModal>
            </div>
        )
    }
}

const MailEntry = props => {
    const {mail, handleClick} = props;
    return(
        <div>
            <button className="mailEntry" onClick={handleClick}>
                {mail.date}
            </button>
        </div>
    )
}

export default MailList;