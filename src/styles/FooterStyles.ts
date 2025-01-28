import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FooterContainer = styled.footer`
  background: rgba(10, 15, 30, 0.95);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(27, 255, 255, 0.1);
  padding: 4rem 0 2rem 0;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    padding: 3rem 0 1.5rem 0;
  }
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
    align-items: center;
  }
`;

export const FooterTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  background: linear-gradient(120deg, #FFFFFF, rgba(27, 255, 255, 0.9));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }
`;

export const FooterText = styled.p`
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

export const FooterLink = styled(motion.a)`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    justify-content: center;
    font-size: 0.9rem;
  }

  &:hover {
    color: rgba(27, 255, 255, 0.9);
    transform: translateX(5px);
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 0.75rem;
  }
`;

export const SocialIcon = styled(motion.a)`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    padding: 0.4rem;
  }

  &:hover {
    color: rgba(27, 255, 255, 0.9);
    background: rgba(27, 255, 255, 0.2);
    transform: translateY(-3px);
  }
`;

export const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;

  @media (max-width: 768px) {
    padding-top: 1.5rem;
    margin-top: 1.5rem;
    font-size: 0.8rem;
  }
`;
