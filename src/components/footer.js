import React from 'react';
import classes from '../global.scss';
import logo from "../assets/images/logo.png";

const Footer = () => {
    return( 
        <footer className={classes.footer_site}>
        <div className={classes.container}>
            <div className={classes.footer_logo}>
                <img src={logo} alt=""/>
            </div>
        </div>
    </footer>
    )
}
export default Footer;