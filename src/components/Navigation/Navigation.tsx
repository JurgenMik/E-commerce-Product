import React, {useState} from 'react';
import './Navigation.scss';
import Logo from '../assets/logo.svg';
import Avatar from '../assets/image-avatar.png';
import {BsCart3} from 'react-icons/bs';
import {anchorTitles} from "../../utils";

function Navigation() {

    const [hoveredLink, setHovered] = useState<string>();

    const handleHoveredLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
        setHovered(e.currentTarget.innerHTML);
    }

    const handleHoveredLinkStyle = (targetElement: string) => {
        return hoveredLink === targetElement ? 'hovered' : '';
    }

    const handleResetHoveredState = () => {
        setHovered('');
    }

    return (
        <div className="main-nav-container">
            <img
                src={Logo}
                alt="logo"
            />
            <div className="links-container" onMouseLeave={handleResetHoveredState}>
                <a href="/collections" id={handleHoveredLinkStyle('Collections')} title={anchorTitles[0]} onMouseEnter={e => handleHoveredLink(e)}>
                    Collections
                </a>
                <a href="/men" id={handleHoveredLinkStyle('Men')} title={anchorTitles[1]} onMouseEnter={e => handleHoveredLink(e)}>
                    Men
                </a>
                <a href="/women" id={handleHoveredLinkStyle('Women')} title={anchorTitles[2]} onMouseEnter={e => handleHoveredLink(e)}>
                    Women
                </a>
                <a href="/about" id={handleHoveredLinkStyle('About')} title={anchorTitles[3]} onMouseEnter={e => handleHoveredLink(e)}>
                    About
                </a>
                <a href="/contact" id={handleHoveredLinkStyle('Contact')} title={anchorTitles[4]} onMouseEnter={e => handleHoveredLink(e)}>
                    Contact
                </a>
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