import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Game from './components/TicTacToe';

function App() {
  const [showIcons, setShowIcons] = useState(false);

  return (
    <div>
      <header>
        <Navbar showIcons={showIcons} setShowIcons={setShowIcons} />
      </header>
      <main>
        {showIcons ? (
          <Game />
        ) : (
          <>
            <Home />
            <About />
            <Skills />
            <Resume />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
