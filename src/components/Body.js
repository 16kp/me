import React from 'react';
import '../css/styles.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import MailIcon from '@material-ui/icons/Mail';


function Body() {

    return (
        <div className="App-body">
            <Grid container spacing={2}>
                
                {/* left side containing info */}
                <Grid item xs={8}>
                    <Grid container spacing={2} direction="column">
                        <Grid item xs={6}>
                            <span className="hello white">んey there @</span>
                        </Grid>
                        <Grid item xs={12}>
                            <span className="text white">
                                Hello, I'm Krishna Purohit.
                            </span>
                        </Grid>
                    </Grid>                
                </Grid>

                {/* right side containing buttons */}
                <Grid item xs={4}>
                
                    <Button variant="outlined" className="white-border" href="mailto:purohitkrishnar@gmail.com?subject=Hey There!" >
                        <MailIcon className="white" />
                        <span className="text white">Hit me up!</span>
                    </Button>
                    
                </Grid>

            </Grid>
        </div>
    );
}

export default Body;

