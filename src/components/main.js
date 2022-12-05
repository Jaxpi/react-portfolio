import React, { useState } from 'react';
import Portfolio from './pages/portfolio';
import About from './pages/about';
import Resume from './pages/resume';
import Contact from './pages/contact';
import Navigation from './navigation';

export default function MainContainer() {
    const [currentPage, setCurrentPage] = useState('About');
  
    const renderPage = () => {
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      return <Contact />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
    );
  }