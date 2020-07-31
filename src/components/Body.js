import React from 'react';
import '../css/styles.css';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import MailIcon from '@material-ui/icons/Mail';


function Body() {

    return (
        <div className="App-body">
            <Button variant="outlined" color="black">
                <MailIcon />
                <span className="text">Hit me up!</span>
            </Button>
        </div>
    );
}

export default Body;

