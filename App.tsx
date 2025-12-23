import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import StandardsCheck from './components/StandardsCheck';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'how-it-works'>('home');

  const navigateToHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  const navigateToHowItWorks = () => {
    setCurrentPage('how-it-works');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans scroll-smooth">
      <Header onNavigateHome={navigateToHome} />
      <main className="flex-grow">
        {currentPage === 'home' ? (
          <>
            <Hero onNavigateToHowItWorks={navigateToHowItWorks} />
            <About />
            <Services />
            {/* Process is removed from home flow as requested */}
            <StandardsCheck />
            <Contact />
          </>
        ) : (
          <Process onBack={navigateToHome} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;