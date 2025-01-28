import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  :root {
    --primary: #2E3192;
    --primary-rgb: 46, 49, 146;
    --secondary: #1BFFFF;
    --secondary-rgb: 27, 255, 255;
    --accent: #00D9FF;
    --bg-primary: #0B1121;
    --bg-secondary: #111827;
    --text-primary: #FFFFFF;
    --text-secondary: rgba(255, 255, 255, 0.7);
    --transition-main: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --header-height: 70px;
    --footer-height: 60px;
    --z-header: 1000;
    --z-overlay: 2000;
    --z-modal: 3000;
    --font-primary: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif;
    --font-secondary: 'Inter', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: none !important;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-secondary);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
    color: var(--text-primary);
    line-height: 1.6;
    transition: color var(--transition-main);
    overflow-x: hidden;
    position: relative;
    min-height: 100vh;
  }

  section {
    position: relative;
    overflow: hidden;
    background: rgba(11, 17, 33, 0.4);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(
        circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
        rgba(27, 255, 255, 0.1) 0%, 
        transparent 50%
      );
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
      z-index: -1;
    }

    &:hover::before {
      opacity: 1;
    }

    &:nth-child(odd) {
      background: rgba(17, 24, 39, 0.4);
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-primary);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--text-primary) 0%, rgba(255, 255, 255, 0.9) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color var(--transition-main);

    &:hover {
      color: var(--secondary);
    }
  }

  button {
    font-family: inherit;
    border: none;
    outline: none;
    cursor: pointer;
  }

  a, button, [role="button"], input[type="submit"], input[type="button"] {
    cursor: none !important;
  }

  @media (max-width: 768px) {
    * {
      cursor: auto !important;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg-secondary);
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, var(--primary), var(--secondary));
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, var(--secondary), var(--primary));
  }

  ::selection {
    background-color: var(--primary);
    color: white;
  }
`;

export default GlobalStyle;
