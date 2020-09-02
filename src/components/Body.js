import React from 'react';
import '../css/styles.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';

function Body() {

    return (
        <div className="App-body">
            <Grid container spacing={4}>
                
                {/* empty space of 1 column on the left */}
                <Grid item xs={1}></Grid>

                <Grid item xs={5}>
                    <Grid container spacing={3} direction="column">
                        <Grid item xs={6}>
                            <span className="hello white">んey there!</span>
                        </Grid>

                        {/* space between header and description */}
                        <Grid item xs={12} className="empty"></Grid>
                        
                        <Grid item xs={12}>
                            <span className="text white">
                                Hello, I'm Krishna, I live in Hyderabad, India, and work at Amazon. In my free time I like to program.
                                
                            </span>
                        </Grid>
                    </Grid>                
                </Grid>

                {/* empty space of 4 columns */}
                <Grid item xs={4}></Grid>
                
                <Grid item xs={2}>
                    <a href="mailto:purohitkrishnar@gmail.com?subject=Hey There!" target="_blank">
                        <MailIcon className="white social-button"></MailIcon>
                    </a>
                    <a href="https://twitter.com/purohitkrishnar" target="_blank">
                        <TwitterIcon className="white social-button"></TwitterIcon>
                    </a>
                    <a href="https://www.linkedin.com/in/purohitkrishnar/" target="_blank">
                        <LinkedInIcon className="white social-button"></LinkedInIcon>
                    </a>
                    <a href="https://github.com/16kp" target="_blank">
                        <GitHubIcon className="white social-button"></GitHubIcon>
                    </a>
                    
                </Grid>

            </Grid>
        </div>
    );
}

export default Body;

