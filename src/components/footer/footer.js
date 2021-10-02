import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import './footer.css';
import githubLogo from '../images/github.png';
import linkedinLogo from '../images/linkedin.png';
import twitterLogo from '../images/twitter.png'

function Footer(props){
    return (
        <div className="footer">
            <div className="container footer-info">
                <p Style="margin:auto; width:fit-content" className="mt-5 mb-3 text-muted">Developed with ❤️ by Pranav Singh</p>
                <div Style={"width:fit-content; margin:auto"}>
                    <Link className="footer-link" to={{pathname: "https://github.com/theBeginner86"}} target="_blank"><img className="profile-img" src={githubLogo} alt="github-icon"/></Link>
                    <Link className="footer-link" to={{pathname: "https://twitter.com/theBeginner86"}} target="_blank"><img className="profile-img" src={twitterLogo} alt="twitter-icon"/></Link>
                    <Link className="footer-link" to={{pathname: "https://www.linkedin.com/in/pranav-singh-00904b1bb/"}} target="_blank"><img className="profile-img" src={linkedinLogo} alt="linkedin-icon"/></Link>
                </div>
            </div>   
        </div>
    )
}

export default Footer;
