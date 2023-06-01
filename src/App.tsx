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
    </div>
  );
}

export default App;
