import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroSection = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 0;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background);
  
  @media (max-width: 768px) {
    padding: 1rem;
    min-height: calc(100vh - 60px);
    margin-top: 60px;
  }
`;

export const HeroContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    justify-content: flex-start;
    gap: 1.5rem;
  }
`;

export const HeroText = styled.div`
  flex: 1;
  max-width: 600px;

  @media (max-width: 768px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 1rem;
  }
`;

export const TitleContainer = styled.div`
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    width: 100%;
  }
`;

export const StyledH1 = styled.h1`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: clamp(2.5rem, 8vw, 4rem);
  line-height: 1.1;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif;
  font-weight: 700;
  background: linear-gradient(120deg, #FFFFFF, rgba(27, 255, 255, 0.8));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    font-size: clamp(2rem, 7vw, 2.5rem);
    flex-wrap: wrap;
    gap: 0.25rem;
  }
`;

export const AnimatedSpan = styled.span`
  display: inline-block;
  background: linear-gradient(120deg, #FFFFFF, rgba(27, 255, 255, 0.8));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
  font-size: 0.7em;
  padding-left: 3px;

  @media (max-width: 768px) {
    font-size: 0.6em;
  }
`;

export const TypedContainer = styled.div<{ $currentText: string }>`
  min-height: 2em;
  margin: 0.75rem 0;
  font-size: clamp(1.25rem, 4vw, 1.5rem);
  background: linear-gradient(120deg, #FFFFFF, rgba(27, 255, 255, 0.9));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-align: center;
  position: relative;
  line-height: 1.4;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
    width: 100%;
    max-width: 90%;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 0.75rem;
    margin-top: 1.5rem;
  }
`;

export const StyledButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  text-decoration: none;
  width: auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
  }

  &.primary {
    background: linear-gradient(120deg, #00B4DB, #0083B0);
    color: white;
    box-shadow: 0 4px 15px rgba(0, 180, 219, 0.3);

    &:hover {
      box-shadow: 0 6px 20px rgba(0, 180, 219, 0.4);
    }
  }

  &.secondary {
    background: rgba(255, 255, 255, 0.1);
    color: var(--text);
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);

    &:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(255, 255, 255, 0.3);
    }
  }
`;

export const LottieWrapper = styled(motion.div)`
  flex: 1;
  max-width: 500px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    max-width: 80%;
    margin: 1rem 0;
    
    .lottie-container {
      width: 100%;
      height: auto;
    }
  }

  .lottie-container {
    width: 100%;
    height: 100%;
  }
`;

export const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle at center, rgba(0, 180, 219, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
`;
