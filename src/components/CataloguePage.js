import React from 'react';
import { useNavigate } from 'react-router-dom';

const CataloguePage = () => {
  const navigate = useNavigate();

  const handleCatalogueClick = () => {
    // You can add catalogue functionality here
    alert('Catalogue button clicked!');
  };

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <div className="logo-container">
        <img src="/heritage-logo.svg" alt="Heritage Lane & Co" className="mx-auto" />
      </div>
      <h1 className="text-center text-gray-800 mb-8 font-playfair font-semibold">Catalogue Page</h1>
      
      <div className="text-center mb-8">
        <button 
          className="catalogue-btn hover:bg-green-700 transition-colors duration-200"
          onClick={handleCatalogueClick}
        >
         View Catalogue
        </button>
      </div>

      <div className="comments">
        <p>PS: As promised, your exclusive 15% discount is waiting! 🌟 Use code INVITE15 on our website or show this email in-store to unlock savings across our entire range.</p>
      </div>

      <button 
        onClick={goBack}
        className="back-btn hover:bg-green-700 transition-colors duration-200"
      >
        Back to Form
      </button>
    </div>
  );
};

export default CataloguePage;