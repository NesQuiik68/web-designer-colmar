import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyle from './styles/GlobalStyle';
import { useMousePosition } from './hooks/useMousePosition';
import AnimatedBackground from './components/AnimatedBackground';
import GlowingCursor from './components/GlowingCursor';

const App: React.FC = () => {
  useMousePosition();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AnimatedBackground />
      <GlowingCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
