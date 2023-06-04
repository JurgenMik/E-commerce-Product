import React from 'react';
import './App.scss';
import Navigation from './components/Navigation/Navigation';
import MobileNavigation from './components/MobileNavigation/MobileNavigation';

function App() {

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

                </div>
                <div className="interaction">

                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
