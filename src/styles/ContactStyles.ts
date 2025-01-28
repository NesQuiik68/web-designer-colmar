import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContactSection = styled.section`
  padding: 8rem 2rem;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, 
    rgba(0, 0, 0, 0) 0%,
    rgba(27, 255, 255, 0.03) 50%,
    rgba(0, 0, 0, 0) 100%
  );

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100%;
    background: radial-gradient(
      circle at center,
      rgba(27, 255, 255, 0.05) 0%,
      rgba(27, 255, 255, 0.02) 30%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

export const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  position: relative;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    margin: 1rem auto 0;
    gap: 2rem;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

export const ContactIntro = styled.div`
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    text-align: center;
  }

  h3 {
    font-size: 2rem;
    color: #fff;
    margin-bottom: 1rem;
    background: linear-gradient(120deg, #fff, rgba(27, 255, 255, 0.8));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 768px) {
      font-size: 1.75rem;
      margin-bottom: 0.75rem;
    }
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    font-size: 1.1rem;

    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.5;
    }
  }
`;

export const ContactCard = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: rgba(27, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(27, 255, 255, 0.1);
  border-radius: 15px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1.25rem;
    gap: 1rem;
    border-radius: 12px;
    justify-content: center;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(27, 255, 255, 0.1),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover::before {
    transform: translateX(100%);
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: rgba(27, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid rgba(27, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1.25rem;
    border-radius: 15px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  input, textarea {
    width: 100%;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(27, 255, 255, 0.1);
    border-radius: 10px;
    color: #fff;
    font-size: 1rem;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      padding: 0.875rem;
      font-size: 0.9rem;
      border-radius: 8px;
    }

    &:focus {
      outline: none;
      border-color: rgba(27, 255, 255, 0.3);
      background: rgba(255, 255, 255, 0.08);
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;

    @media (max-width: 768px) {
      min-height: 120px;
    }
  }
`;

export const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: linear-gradient(
    135deg,
    rgba(27, 255, 255, 0.2),
    rgba(27, 255, 255, 0.1)
  );
  border: 1px solid rgba(27, 255, 255, 0.2);
  border-radius: 30px;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: fit-content;
  margin-left: auto;

  @media (max-width: 768px) {
    padding: 0.875rem 1.75rem;
    font-size: 1rem;
    border-radius: 25px;
    margin: 0 auto;
  }

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(27, 255, 255, 0.3),
      rgba(27, 255, 255, 0.2)
    );
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

export const ResponseMessage = styled(motion.div)<{ isError?: boolean }>`
  text-align: center;
  color: ${props => props.isError ? '#ff4d4d' : 'rgba(27, 255, 255, 0.9)'};
  padding: 1rem;
  border-radius: 10px;
  background: ${props => props.isError ? 'rgba(255, 77, 77, 0.1)' : 'rgba(27, 255, 255, 0.1)'};
  border: 1px solid ${props => props.isError ? 'rgba(255, 77, 77, 0.2)' : 'rgba(27, 255, 255, 0.2)'};
  margin-top: 1rem;

  @media (max-width: 768px) {
    padding: 0.875rem;
    font-size: 0.9rem;
    border-radius: 8px;
  }
`;
