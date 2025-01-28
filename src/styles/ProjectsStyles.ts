import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectsSection = styled.section`
  padding: 8rem 0;
  position: relative;
  background: linear-gradient(180deg, 
    rgba(0, 0, 0, 0) 0%,
    rgba(27, 255, 255, 0.02) 50%,
    rgba(0, 0, 0, 0) 100%
  );

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export const StyledTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: #fff;
  display: inline-block;
  background: linear-gradient(120deg, #FFFFFF, rgba(27, 255, 255, 0.9));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  padding-bottom: 1rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 2rem;
    padding-bottom: 0.75rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(120deg, rgba(27, 255, 255, 0.5), rgba(27, 255, 255, 0.2));
    border-radius: 2px;

    @media (max-width: 768px) {
      width: 80px;
      height: 2px;
    }
  }
`;

export const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const ProjectsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectsGrid = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0;
  }
`;

export const ProjectCard = styled(motion.div)`
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  background: rgba(27, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(27, 255, 255, 0.1);
  height: 600px;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 400px;
    border-radius: 16px;
  }
`;

export const ProjectContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.7) 50%,
    transparent 100%
  );
  transform: translateY(70%);
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    padding: 1.5rem;
    transform: translateY(65%);
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #fff;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 0.75rem;
    }
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 1.5rem;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 0.9rem;
      line-height: 1.5;
      margin-bottom: 1rem;
    }
  }
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

export const TechItem = styled.span`
  padding: 0.5rem 1rem;
  background: rgba(27, 255, 255, 0.1);
  border-radius: 20px;
  font-size: 0.9rem;
  color: rgba(27, 255, 255, 0.9);

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
`;
