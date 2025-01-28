import { createGlobalStyle } from 'styled-components';
import { MobileStyles } from './MobileStyles';
import { DesktopStyles } from './DesktopStyles';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #2E3192;
    --primary-rgb: 46, 49, 146;
    --secondary: #1BFFFF;
    --secondary-rgb: 27, 255, 255;
    
    --bg-primary: #0A0A0A;
    --bg-secondary: #111111;
    
    --text-primary: #FFFFFF;
    --text-secondary: rgba(255, 255, 255, 0.7);
    
    --transition-main: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    --header-height: 70px;
    --footer-height: 60px;
    
    --z-header: 1000;
    --z-overlay: 2000;
    --z-modal: 3000;
    --z-dropdown: 4000;
    --z-tooltip: 5000;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
    min-height: 100vh;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Base Styles */
  .section {
    padding: 6rem 0;
    position: relative;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  button, a {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    outline: none !important;
  }

  @media (max-width: 768px) {
    * {
      -webkit-tap-highlight-color: transparent;
      -webkit-touch-callout: none;
      user-select: none;
    }
  }

  /* Import Mobile and Desktop Styles */
  ${MobileStyles}
  ${DesktopStyles}

  /* Suppression des styles du curseur lumineux */
  .cursor {
    display: none;
  }

  /* Styles de base pour les liens */
  a {
    color: inherit;
    text-decoration: none;
  }

  /* Styles pour la barre de défilement */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(27, 255, 255, 0.2);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(27, 255, 255, 0.3);
  }
`;

export default GlobalStyles;
