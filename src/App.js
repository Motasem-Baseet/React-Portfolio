import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './style/style.css';
import './style/foliostyle.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  // State to handle dark mode toggle
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`page ${darkMode ? 'dark-mode' : ''}`}>
      <Header toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
