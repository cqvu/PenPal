import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import Button from '@material-ui/core/Button';
import '../styles/MailModal.css';

class MatchingSurvey extends React.Component {
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
                    className="mailModal"
                    open={modalOpen}
                    PaperProps={{
                        style: {
                          backgroundColor: 'black',
                          boxShadow: 'none',
                          width: '100vw',
                          height: '50vh'
                        },
                      }}>
                        <DialogContent>
                            { this.state.isMatchDay ? <ReactTypeformEmbed url="https://vyl003.typeform.com/to/CJ2irtPt" /> : null }
                    </DialogContent>            
                </Dialog>
                
            </div>
        )
    }
}

export default MatchingSurvey