import React, {useState} from 'react';
import './App.scss';
import Navigation from './components/Navigation/Navigation';
import MobileNavigation from './components/MobileNavigation/MobileNavigation';
import {FaMinus, FaPlus} from 'react-icons/fa';
import {BsCart3} from 'react-icons/bs';

function App() {

    const [counter, setProductCounter] = useState<number>(0);

    const handleProductCounterChange = (actionType: string) => {
            switch (actionType) {
                case 'increment': {
                    setProductCounter(counter + 1);
                    break;
                }
                case 'decrement': {
                    if (counter > 0 ) {
                        setProductCounter(counter - 1);
                    }
                    break;
                }
            }
    }

    const screen = window.innerWidth <= 395;

  return (
    <div className="main-container">
        {screen ?
            <MobileNavigation />
            :
            <Navigation />
        }
        <div className="product-content-container">
            <div className="product-images">

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
                            onClick={e =>
                                handleProductCounterChange('decrement')
                            }
                        />
                        <span>{counter}</span>
                        <FaPlus
                            id="plus-minus"
                            onClick={e =>
                                handleProductCounterChange('increment')
                            }
                        />
                    </div>
                    <button>
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
