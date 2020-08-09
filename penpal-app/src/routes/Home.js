import React from 'react'
import MailModal from '../components/MailModal'
import MailEditor from '../components/MailEditor';
import MailList from '../components/MailList';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            modalOpen: false,
            editorOpen: false,
            listOpen: false
        }
    }

    mailEditorOpen = () => {
        this.setState({ editorOpen: true})
    }

    mailEditorClose = () => {
        this.setState({ editorOpen: false})
    }

    mailListOpen = () => {
        this.setState({ listOpen: true})
    }

    mailListClose = () => {
        this.setState({ listOpen: false})
    }


    render() {
        return (
            <div>
                <button onClick={this.mailModalOpen}>Test MailModal</button>
                <button onClick={this.mailEditorOpen}>Test MailEditor</button>
                <MailModal modalOpen={this.state.modalOpen} handleClose={this.mailModalClose}></MailModal>
                <MailEditor editorOpen={this.state.editorOpen} handleClose={this.mailEditorClose}></MailEditor>
                <MailList></MailList>
            </div>
        )
    }
}

export default Home