import React from 'react';
import './Navigation.scss';
import Logo from '../assets/logo.svg';
import Avatar from '../assets/image-avatar.png';
import {BsCart3} from 'react-icons/bs';

function Navigation() {
    return (
        <div className="main-nav-container">
            <img
                src={Logo}
                alt="logo"
            />
            <div className="links-container">
                <a href="/collections" title="Learn more about our collections">Collections</a>
                <a href="/men" title="Discover our men's section">Men</a>
                <a href="/women" title="Explore our women's section">Women</a>
                <a href="/about" title="Find out more about our company">About</a>
                <a href="/contact" title="Contact us for any inquiries">Contact</a>
            </div>
            <div className="interactive-container">
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

export default Navigation;