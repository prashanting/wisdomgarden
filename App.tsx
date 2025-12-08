import React, { useState, useEffect } from 'react';
import { Page } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Tips } from './pages/Tips';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Article } from './pages/Article';
import { Disclaimer } from './pages/Disclaimer';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  // Simple Router Switch
  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home setPage={setCurrentPage} />;
      case Page.TIPS:
        return <Tips setPage={setCurrentPage} />;
      case Page.ABOUT:
        return <About />;
      case Page.CONTACT:
        return <Contact />;
      case Page.ARTICLE:
        return <Article />;
      case Page.DISCLAIMER:
        return <Disclaimer />;
      default:
        return <Home setPage={setCurrentPage} />;
    }
  };

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer setPage={setCurrentPage} />
    </div>
  );
};

export default App;