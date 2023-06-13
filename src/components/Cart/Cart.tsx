import React from 'react';
import './Cart.scss';
import {Product} from "../../interface";
import {RiDeleteBin5Fill} from 'react-icons/ri';
import {cartPosition} from "../../utils";

function Cart({cart}: { cart: Product[] }) {
    return (
        <div className="main-cart-container" style={cartPosition}>
            <div className="cart-header">
                <h1>Cart</h1>
            </div>
            <>
                {cart.length === 0 ?
                    <h1 id="cart-empty">
                        Your cart is empty.
                    </h1>
                    :
                    <div className="main-item-container">
                        {cart.map((item: Product) => {
                            return (
                                <div className="item-container" key={item.product_id}>
                                    <div className="cart-item-thumbnail">
                                        <img
                                            src={item.product_thumbnail}
                                            alt="thumbnail"
                                        />
                                    </div>
                                    <div className="cart-details">
                                        <h1>{item.product_id}</h1>
                                        <div className="price">
                                            <p>
                                                ${`${item.price} x ${item.quantity}`}
                                            </p>
                                            <p id="sum">
                                                ${item.price * item.quantity}
                                            </p>
                                        </div>
                                    </div>
                                    <RiDeleteBin5Fill
                                        id="item-delete"
                                    />
                                </div>
                            )
                        })}
                        <button>
                            Checkout
                        </button>
                    </div>
                }
            </>
        </div>
    )
}

export default Cart;