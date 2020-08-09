import React from 'react'
import MailModal from '../components/MailModal'

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            modalOpen: false
        }
    }

    handleOpen = () => {
        this.setState({ modalOpen: true})
    }

    handleClose = () => {
        this.setState({ modalOpen: false})
    }

    // modalBody = (
    //     <div style={modalStyle}
    // )

    render() {
        return (
            <div>
                <button onClick={this.handleOpen}>Test</button>
                <MailModal modalOpen={this.state.modalOpen} handleClose={this.handleClose}></MailModal>
            </div>
        )
    }
}

export default Home