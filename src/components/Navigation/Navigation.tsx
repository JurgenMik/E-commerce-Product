import React, {useState} from 'react';
import './Navigation.scss';
import Logo from '../assets/logo.svg';
import Avatar from '../assets/image-avatar.png';
import {BsCart3} from 'react-icons/bs';
import {Product} from "../../interface";
import {cartNotificationStyle, anchorTitles} from "../../utils";
import Cart from "../Cart/Cart";

interface Props {
    cart: Product[],
    setCartItems: (item: any) => void
}

function Navigation({cart, setCartItems}: Props) {

    const [hoveredLink, setHovered] = useState<string>();
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

    const handleHoveredLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
        setHovered(e.currentTarget.innerHTML);
    }

    const handleHoveredLinkStyle = (targetElement: string) => {
        return hoveredLink === targetElement ? 'hovered' : '';
    }

    const handleResetHoveredState = () => {
        setHovered('');
    }

    const handleOpenCartModal = () => {
        setIsCartOpen(!isCartOpen);
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
                {cart.length !== 0 && !isCartOpen &&
                    <span style={cartNotificationStyle}>
                        {cart.length}
                    </span>
                }
                <BsCart3
                    id="cart"
                    onClick={handleOpenCartModal}
                />
                <img
                    id="avatar"
                    src={Avatar}
                    alt="profile"
                />
                {isCartOpen &&
                    <Cart
                        cart={cart}
                        setCartItems={setCartItems}
                    />
                }
            </div>
        </div>
    )
}

export default Navigation;