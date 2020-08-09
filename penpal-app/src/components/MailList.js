import React from 'react'
import MailModal from '../components/MailModal'
import '../styles/MailList.css'

class MailList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mailList : [
                {"date": "Monday Aug 6", "text": "Hello"},
                {"date": "Tuesday Aug 7", "text": "Hello again"},
                {"date": "Wed Aug 8", "text": "Bye"}
            ],
            modalOpen : false
        }
    }

    mailModalOpen = () => {
        this.setState({ modalOpen: true})
    }

    mailModalClose = () => {
        this.setState({ modalOpen: false})
    }

    render() {
        return(
            <div>
                <div className="mailListContainer">
                    {this.state.mailList.map((mail, index) => 
                        <MailEntry mail={mail} index={index+1} handleClick={this.mailModalOpen}></MailEntry>
                    )}
                </div>
                <MailModal modalOpen={this.state.modalOpen} handleClose={this.mailModalClose}></MailModal>
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