import React from 'react'
import MailModal from '../components/MailModal'
import MailEditor from '../components/MailEditor';
import MailList from '../components/MailList';
import Button from '@material-ui/core/Button';
import firebase from "../components/firebase";
import '../styles/Home.css'
import background from '../images/CosmicConnectionsHomePagewPlaque.png'
import controls from '../images/CosmicConnectionsControlsC.png'
import monitor from '../images/CosmicConnectionsMonitorSmall.png'
import monitorLarge from '../images/CosmicConnectionsMonitorLarge.png'
import iconMail from '../images/mail.png'
import iconPencil from '../images/pencil.png'
import iconCal from '../images/calendar.png'
import test from '../images/spectralogosolo.png'

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            modalOpen: false,
            editorOpen: false,
            listOpen: false,
            showMonitor: false
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

    openMonitor = () => {
        this.setState({showMonitor: true})
    }


    render() {
        return (
            <div>
                <img className="bg" id="outside" src={background}></img>
                <img id="monitor" src={monitor} onClick={this.openMonitor}></img>
                {
                    this.state.showMonitor ? 
                    <div>
                        <img className="monitorLarge" id="monitorLarge" src={monitorLarge}></img>
                        <img className="iconPencil" id="iconPencil" src={iconPencil}></img>
                        <img className="iconMail" id="iconMail" src={iconMail}></img>
                        <img className="iconCal" id="iconCal" src={iconCal}></img>
                        {/* <img className="monitorLarge" id="writeMail" src={test} onClick={this.mailEditorOpen} variant="primary">Test MailEditor</img> */}
                    </div>
                    : null
                } */}
                
                <MailEditor editorOpen={this.state.editorOpen} handleClose={this.mailEditorClose}></MailEditor>
                <MailList></MailList>
            </div>
        )
    }
}

export default Home