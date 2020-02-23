import React from 'react';
import classes from '../global.scss';
import logo from "../assets/images/logo.png";

const Header = () => {
    return( 
        <header className={classes.header_site}>
            <div className={classes.container}>
                <div className={classes.logo}> 
                    <img src={logo} alt="" />
                </div>
            </div>
        </header> 
    )
}
export default Header;