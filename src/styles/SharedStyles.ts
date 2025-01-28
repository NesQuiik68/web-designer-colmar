import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #2E3192;
    --secondary: #1BFFFF;
    --bg-primary: #0A1128;
    --bg-secondary: #1A2238;
    --text-primary: #FFFFFF;
    --text-secondary: #B8B8B8;
    --card-bg: rgba(255, 255, 255, 0.05);
    --card-border: rgba(255, 255, 255, 0.1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.5;
    background: var(--bg-primary);
    color: var(--text-primary);
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;

    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(circle at 20% 20%, rgba(46, 49, 146, 0.15) 0%, transparent 40%),
        radial-gradient(circle at 80% 80%, rgba(27, 255, 255, 0.15) 0%, transparent 40%);
      pointer-events: none;
      z-index: 0;
    }
  }

  ::-webkit-scrollbar {
    width: 10px;
    background: var(--bg-secondary);
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(var(--primary), var(--secondary));
    border-radius: 5px;
  }

  section {
    position: relative;
    padding: 6rem 0;
    overflow: hidden;
    background: linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary));

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--card-border), transparent);
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

export const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 2.5rem);
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(120deg, #FFFFFF, rgba(255, 255, 255, 0.8));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, var(--primary), transparent);
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    font-size: clamp(1.75rem, 6vw, 2rem);
    
    &::after {
      width: 40px;
      height: 2px;
      bottom: -8px;
    }
  }
`;

export const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at top right,
      rgba(27, 255, 255, 0.1),
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  @media (min-width: 769px) {
    &:hover {
      transform: translateY(-5px);
      border-color: rgba(27, 255, 255, 0.2);
      box-shadow: 0 10px 30px -10px rgba(27, 255, 255, 0.1);
      
      &::before {
        opacity: 1;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 15px;
    margin-bottom: 1rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    
    &:active {
      transform: scale(0.98);
      transition: transform 0.2s ease;
    }

    .skill-icon-wrapper {
      width: 50px;
      height: 50px;
      margin-bottom: 1rem;
    }

    h3 {
      font-size: 1.25rem;
      margin-bottom: 0.75rem;
    }

    p {
      font-size: 0.95rem;
      line-height: 1.5;
      margin-bottom: 1rem;
    }

    .feature {
      font-size: 0.9rem;
      padding: 0.4rem 0.8rem;
      margin: 0.25rem;
    }

    .skill-level {
      height: 4px;
      margin-top: 1rem;
    }
  }
`;

export const SkillCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
  
  .skill-icon-wrapper {
    width: 60px;
    height: 60px;
    background: rgba(27, 255, 255, 0.1);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    background: linear-gradient(120deg, #FFFFFF, #B8B8B8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .skill-features {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .feature {
    background: rgba(27, 255, 255, 0.05);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    color: var(--text-secondary);
    border: 1px solid rgba(27, 255, 255, 0.1);
  }

  .skill-level {
    height: 5px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    overflow: hidden;
    margin-top: auto;

    .level-bar {
      height: 100%;
      background: linear-gradient(90deg, var(--primary), rgba(27, 255, 255, 0.5));
      transform-origin: left;
      transition: transform 0.8s ease;
    }
  }

  @media (max-width: 768px) {
    .skill-features {
      margin: -0.25rem;
      padding: 0.5rem 0;
    }

    .feature {
      margin: 0.25rem;
      padding: 0.4rem 0.8rem;
      font-size: 0.85rem;
      border-radius: 15px;
      background: rgba(27, 255, 255, 0.03);
      backdrop-filter: none;
    }

    .skill-level {
      height: 4px;
      
      .level-bar {
        transition: transform 0.4s ease;
      }
    }
  }
`;

export const Button = styled(motion.button)`
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 30px;
  background: linear-gradient(120deg, var(--primary), var(--secondary));
  color: white;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(27, 255, 255, 0.3);
    
    &::before {
      transform: translateX(100%);
    }
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
`;

export const Text = styled.p`
  color: #333;
  line-height: 1.6;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
`;

export const Section = styled(motion.section)`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
`;

export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};
