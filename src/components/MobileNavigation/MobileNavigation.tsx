import React from 'react';
import './MobileNavigation.scss';
import Logo from '../assets/logo.svg';
import Avatar from '../assets/image-avatar.png';
import {BsCart3} from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi';

function MobileNavigation() {
    return (
        <div className="main-mobileNav-container">
            <div className="nav-container">
                <GiHamburgerMenu
                    id="links"
                />
                <img
                    src={Logo}
                    alt="logo"
                />
            </div>
            <div className="mobileInteractive-container">
                <BsCart3
                    id="cart"
                />
                <img
                    src={Avatar}
                    alt="profile"
                />
            </div>
        </div>
    )
}

export default MobileNavigation;