import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import './footer.css';

const Footer = () => {
    return(
        <div className="Footer">
            <div className="socialmedia-icon">
                <FacebookIcon className="icon" /><GitHubIcon className="icon" />
            </div>
            <div className="End-details">
                <h3>Created by Shahzaib<br />For BootCamp 2020 Project</h3>
            </div>
        </div>
    )
}

export default Footer