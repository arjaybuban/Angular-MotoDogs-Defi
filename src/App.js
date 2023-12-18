import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {
  MintNFTs,
  MintSimon,
  ManageNFTs,
  ManageSimon,
  Navbar,
  LegalDisclaimerPopup
} from './Components/index';

function App() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  const [showDisclaimer, setShowDisclaimer] = useState(true);

  const handleCloseDisclaimer = () => {
    setShowDisclaimer(false);
  };

  return (
    <div
      className={`App flex flex-col pb-[40px] justify-center items-center ${
        isTransitioning ? 'isTransitioning' : ''
      }`}
    >
      
      <Navbar />
      <nav className='w-[90%] md:w-[979px] h-[80px] md:h-[120px] border-[6px] border-brown1 rounded-md bg-blue2 flex flex-row gap-4 md:gap-8 px-4 md:px-24 items-center mt-[20px]'>
        <Link
          className='nav-btn bg-grey1 text-sm md:text-base sm:text-[12px] text-center'
          to='/mint-nfts'
        >
          Mint NFTs
        </Link>
        <Link
          className='nav-btn bg-grey1 text-sm md:text-base sm:text-[12px] text-center'
          to='/mint-simon'
        >
          Mint Simon
        </Link>
        <Link
          className='nav-btn bg-grey1 text-sm md:text-base sm:text-[12px] text-center'
          to='/manage-nfts'
        >
          Manage NFTs
        </Link>
        <Link
          className='nav-btn bg-grey1 text-sm md:text-base sm:text-[12px] text-center'
          to='/manage-simon'
        >
          Manage SIMON
        </Link>
      </nav>
      

      <section className='w-[90%] md:w-[979px] h-fit border-[6px] border-brown1 rounded-md bg-blue2'>
        
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames='fade'
            timeout={400}
            onEnter={() => setIsTransitioning(true)}
            onExited={() => setIsTransitioning(false)}
          >
            
            <Routes location={location}>
              
              <Route path='/mint-nfts' element={<MintNFTs />} />
              <Route path='/mint-simon' element={<MintSimon />} />
              <Route path='/manage-nfts' element={<ManageNFTs />} />
              <Route path='/manage-simon' element={<ManageSimon />} />
              <Route path='/' element={<MintNFTs />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </section>
      {showDisclaimer && <LegalDisclaimerPopup onClose={handleCloseDisclaimer} />}
      {/* Rest of your app */}

      <footer className='times text-[16px] text-grey2 text-center'>
        Copyright © 2023 MotoDogs Cycle Club LLC All Rights Reserved
      </footer>
    </div>
  );
}

export default App;
