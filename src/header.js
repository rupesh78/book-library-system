import React from 'react';
import styles from './global.scss';
import logo from 'https://www.wordpressintegration.com/common/images/logo.png';
const Header = () => {
    return(
        <header>
            <div className={styles.container}>
                <a href="#" className={styles.logo}>
                <img src={logo} alt="" />
                </a>
                <a href="#menu" className={mobilemenu}></a>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Feature</li>
                        <li>    Portfolio</li>
                        <li>Contact</li>
                        <li>Order</li>
                        </ul>
                    </div>
            </div>
        </header>
    )
}

export default Header;