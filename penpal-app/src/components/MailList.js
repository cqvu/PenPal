import React from 'react'
import MailModal from '../components/MailModal'
import firebase from "../components/firebase";
import '../styles/MailList.css'

class MailList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mailList : [
                {"date": "Monday Aug 6", "text": "Hello"},
                {"date": "Tuesday Aug 7", "text": "Hello againnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn\nMy name is Anon Alien"},
                {"date": "Wed Aug 8", "text": "Bye"}
            ],
            modalOpen : false,
            openMail : {}
        }
    }
    
    // componentDidMount() {
    //     firebase.auth() {

    //     }
    // }

    mailModalOpen = (mail) => {
        this.setState({ modalOpen: true, openMail: mail })
    }

    mailModalClose = () => {
        this.setState({ modalOpen: false})
    }

    render() {
        return(
            <div>
                <div className="mailListContainer">
                    {this.state.mailList.map((mail, index) => 
                        <MailEntry mail={mail} index={index+1} handleClick={ () => this.mailModalOpen(mail)}></MailEntry>
                    )}
                </div>
                <MailModal mail={this.state.openMail} modalOpen={this.state.modalOpen} handleClose={this.mailModalClose}></MailModal>
            </div>
        )
    }
}

const MailEntry = props => {
    const {mail, index, handleClick} = props;
    return(
        <div>
            <button className="mailEntry" onClick={handleClick}>
                {"Letter " + index + " : " + mail.date}
            </button>
        </div>
    )
}

export default MailList;