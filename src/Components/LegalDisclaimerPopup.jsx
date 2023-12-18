import React from 'react';
import './LegalDisclaimerPopup.css'; // Import the CSS file for styling

const LegalDisclaimerPopup = ({ onClose }) => {
  const handleAccept = () => {
    // Perform actions when the user accepts the disclaimer
    // You can add any necessary logic or API calls here
    onClose();
  };

  return (
    <div className="legal-disclaimer-popup">
      <div className="popup-content">
        <h2>Legal Disclaimer</h2>
        <p>By purchasing MDCC NFTs and $SIMON tokens, you agree to
the following: <br></br> <br></br>
1.You have fully read and understand the MotoDogs Cycle Club
white paper, including our legal disclaimer in its entirety, and
you agree to all terms and conditions therein.<br></br><br></br>
2. These tokens are not registered securities; you agree that you
are acquiring them for the purpose of participating in the
MotoDogs Cycle Club ecosystem and are not purchasing a
security or investment.<br></br><br></br>
3. MotoDogs Cycle Club LLC and its team are not liable for any
losses that may occur. <br></br><br></br></p>
        <button onClick={handleAccept}>Accept</button>
      </div>
    </div>
  );
};

export default LegalDisclaimerPopup;
