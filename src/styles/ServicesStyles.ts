import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ServicesSection = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 6rem 0;
  position: relative;
  display: flex;
  align-items: center;
  background: var(--bg-primary);

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
  position: relative;

  @media (max-width: 768px) {
    margin-top: 2rem;
    gap: 2rem;
  }
`;

export const ServiceCard = styled(motion.div)`
  display: flex;
  gap: 3rem;
  align-items: stretch;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

export const ServiceVisual = styled(motion.div)`
  flex: 0.8;
  position: relative;
  min-height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 25px;
  background: linear-gradient(
    145deg,
    rgba(27, 255, 255, 0.03) 0%,
    rgba(46, 49, 146, 0.03) 100%
  );
  backdrop-filter: blur(10px);
  overflow: hidden;
  isolation: isolate;
  transition: all 0.4s ease;

  @media (max-width: 768px) {
    min-height: 250px;
    padding: 1.5rem;
    border-radius: 20px;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1.5px;
    background: linear-gradient(
      145deg,
      rgba(27, 255, 255, 0.3),
      rgba(46, 49, 146, 0.1)
    );
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  .dotlottie-player {
    width: 100% !important;
    height: 100% !important;
    max-width: 300px;
    max-height: 300px;

    @media (max-width: 768px) {
      max-width: 200px;
      max-height: 200px;
    }
  }
`;

export const ServiceContent = styled(motion.div)`
  flex: 1.2;
  position: relative;
  z-index: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1rem;
    text-align: center;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    background: linear-gradient(120deg, #FFFFFF, rgba(27, 255, 255, 0.9));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 0.75rem;
    }
  }

  p {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 1rem;
      margin-bottom: 1rem;
      line-height: 1.5;
    }
  }
`;

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-size: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
    font-size: 0.9rem;
  }

  &::before {
    content: '→';
    color: rgba(27, 255, 255, 0.8);
  }
`;

export const Price = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: rgba(27, 255, 255, 0.9);
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-top: 1rem;
  }
`;
