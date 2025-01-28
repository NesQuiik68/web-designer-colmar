import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TestimonialsSection = styled.section`
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

export const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const TestimonialsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const TestimonialWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const TestimonialCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 12px;
  }
  
  &:hover {
    border-color: rgba(27, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const TestimonialContent = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
`;

export const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.75rem;
  }
`;

export const AuthorImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(27, 255, 255, 0.3);

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AuthorInfo = styled.div`
  h4 {
    color: #fff;
    font-size: 1.2rem;
    margin-bottom: 0.3rem;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  p {
    color: rgba(27, 255, 255, 0.8);
    font-size: 0.9rem;

    @media (max-width: 768px) {
      font-size: 0.85rem;
    }
  }
`;

export const NavigationButton = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  font-size: 2rem;
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0.75rem;
  }

  &:hover {
    color: rgba(27, 255, 255, 0.9);
  }

  &:disabled {
    color: rgba(255, 255, 255, 0.2);
    cursor: not-allowed;
  }
`;

export const QuoteIcon = styled.div`
  color: rgba(27, 255, 255, 0.2);
  font-size: 1.5rem;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  &.left {
    margin-right: 0.5rem;
  }

  &.right {
    margin-left: 0.5rem;
  }
`;
