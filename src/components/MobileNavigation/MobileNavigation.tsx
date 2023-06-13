import React, {useState} from 'react';
import './MobileNavigation.scss';
import Logo from '../assets/logo.svg';
import Avatar from '../assets/image-avatar.png';
import {BsCart3} from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi';
import {IoMdClose} from 'react-icons/io';
import {Product} from "../../interface";
import {cartNotificationStyle, anchorTitles} from "../../utils";
import Cart from "../Cart/Cart";

function MobileNavigation({cart}: { cart: Product[] }) {

    const [openSidebarMenu, setOpenSidebarMenu] = useState<boolean>(false);
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

    const handleSidebarMenuPopup = () => {
        setOpenSidebarMenu(true);
    }

    const handleSidebarMenuClose = () => {
        setOpenSidebarMenu(false);
    }

    const handleOpenCartModal = () => {
        setIsCartOpen(!isCartOpen);
    }

    return (
        <div className="main-mobileNav-container">
            <div className="nav-container">
                {openSidebarMenu &&
                    <div className="sidebarMenu-container">
                        <div className="sidebar-close">
                            <IoMdClose
                                onClick={handleSidebarMenuClose}
                            />
                        </div>
                        <div className="sidebar-links">
                            <a href="/collections" title={anchorTitles[0]}>
                                Collections
                            </a>
                            <a href="/men" title={anchorTitles[1]}>
                                Men
                            </a>
                            <a href="/women" title={anchorTitles[2]}>
                                Women
                            </a>
                            <a href="/about" title={anchorTitles[3]}>
                                About
                            </a>
                            <a href="/contact" title={anchorTitles[4]}>
                                Contact
                            </a>
                        </div>
                    </div>
                }
                <GiHamburgerMenu
                    id="links"
                    onClick={handleSidebarMenuPopup}
                />
                <img
                    src={Logo}
                    alt="logo"
                />
            </div>
            <div className="mobileInteractive-container">
                {cart.length !== 0 &&
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
                    />
                }
            </div>
        </div>
    )
}

export default MobileNavigation;