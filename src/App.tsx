import React from 'react';

import Header from './components/Header';
import Router from './router';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
};

export default App;
