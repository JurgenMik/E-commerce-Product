import React, {useState} from 'react';
import './App.scss';
import Navigation from './components/Navigation/Navigation';
import MobileNavigation from './components/MobileNavigation/MobileNavigation';
import ProductFeature from "./components/ProductFeature/ProductFeature";
import {FaMinus, FaPlus} from 'react-icons/fa';
import {BsCart3} from 'react-icons/bs';
import {Product} from "./interface";
import Thumbnail from './components/assets/product/image-product-1-thumbnail.jpg';

function App() {

    const [cart, setCartItems] = useState<Product[]>([]);
    const [product, setProductProps] = useState<Product>({
        product_id: 'Fall Limited Edition Sneakers',
        product_thumbnail: Thumbnail,
        price: 125,
        quantity: 0,
    });

    const handleProductCounterChange = (actionType: string) => {
            switch (actionType) {
                case 'increment': {
                    setProductProps({...product, quantity: ++product.quantity});
                    break;
                }
                case 'decrement': {
                    if (product.quantity > 0) {
                        setProductProps({...product, quantity: --product.quantity});
                    }
                    break;
                }
            }
    }

    const handleAddProductToCart = () => {
        const isAlreadyAdded = cart.find((products: Product) => products.product_id === product.product_id);

        if (product.quantity && !isAlreadyAdded) {
            setCartItems([...cart, product]);
        }
    }

    const screen = window.innerWidth <= 395;

  return (
    <div className="main-container">
        {screen ?
            <MobileNavigation
                cart={cart}
                setCartItems={setCartItems}
            />
            :
            <Navigation
                cart={cart}
                setCartItems={setCartItems}
            />
        }
        <div className="product-content-container">
            <div className="product-images">
                <ProductFeature />
            </div>
            <div className="product-details">
                <div className="heading">
                    <h1 id="enterprise">sneaker company</h1>
                    <h1 id="title">Fall Limited Edition Sneakers</h1>
                    <p>
                        These low-profile sneakers are your perfect casual wear companion.
                        Featuring a durable rubber outer sole, they'll withstand everything
                        the weather can offer.
                    </p>
                </div>
                <div className="price">
                    <div className="after-discount">
                        <h1>$125.00</h1>
                        <h1 id="discount">50%</h1>
                    </div>
                    <h1 id="original">
                        $250.00
                    </h1>
                </div>
                <div className="interaction">
                    <div className="quantity">
                        <FaMinus
                            id="plus-minus"
                            onClick={() =>
                                handleProductCounterChange('decrement')
                            }
                        />
                        <span>{product.quantity}</span>
                        <FaPlus
                            id="plus-minus"
                            onClick={() =>
                                handleProductCounterChange('increment')
                            }
                        />
                    </div>
                    <button onClick={handleAddProductToCart}>
                        <BsCart3 id="addToCart" />
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
