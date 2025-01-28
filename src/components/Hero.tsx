import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Typed from 'typed.js';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: calc(100vh - var(--header-height));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    width: 80vw;
    height: 80vw;
    background: radial-gradient(circle, var(--primary) 0%, transparent 70%);
    opacity: 0.1;
    top: -40vw;
    right: -40vw;
    border-radius: 50%;
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    min-height: 100vh;
    justify-content: flex-start;
    padding-top: calc(var(--header-height) + 2rem);
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 100%;
    padding: 0 1rem;
  }
`;

const HeroText = styled.div`
  h1 {
    font-size: clamp(3rem, 7vw, 5rem);
    margin-bottom: 1.5rem;
    line-height: 1.1;
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif;
    font-weight: 700;
    letter-spacing: -0.02em;
    background: linear-gradient(
      to right,
      var(--primary),
      var(--secondary),
      var(--accent)
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    display: inline-block;

    &::before {
      content: attr(data-text);
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      background: linear-gradient(
        to right,
        var(--primary),
        var(--secondary),
        var(--accent)
      );
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      filter: blur(12px);
      opacity: 0.7;
    }

    &::after {
      content: '';
      position: absolute;
      inset: -10px -20px;
      background: radial-gradient(
        circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
        rgba(46, 49, 146, 0.15),
        transparent 50%
      );
      opacity: 0;
      transition: opacity 0.3s;
      pointer-events: none;
      z-index: -1;
    }

    &:hover::after {
      opacity: 1;
    }

    @media (max-width: 768px) {
      font-size: clamp(2rem, 4vw, 2.5rem);
      margin-bottom: 1rem;
      &::before, &::after {
        display: none;
      }
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--text-secondary);
    margin-bottom: 2.5rem;
    max-width: 600px;

    @media (max-width: 768px) {
      font-size: 0.95rem;
      line-height: 1.6;
      margin: 1rem auto;
      padding: 0 1rem;
      max-width: 85%;
      color: var(--text);
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      text-align: center;

      br {
        display: block;
        content: "";
        margin: 0.5rem 0;
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    padding: 0;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    max-width: 300px;
    margin: 1rem auto;
    gap: 1rem;
  }
`;

const StyledButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(45deg, var(--primary), var(--secondary));
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, var(--secondary), var(--primary));
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  span {
    position: relative;
    z-index: 1;
  }

  svg {
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 1rem;
    font-size: 1rem;
    background: var(--primary);
    
    &::before {
      display: none;
    }
    
    svg {
      transition: none;
    }
  }
`;

const LottieWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    border-radius: 20px;
    opacity: 0.1;
    transform: rotate(-3deg) scale(0.95);
    z-index: -1;
  }

  .lottie-container {
    width: 150%;
    height: auto;
    margin-left: -25%;
    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.2));
  }

  @media (max-width: 768px) {
    max-width: 280px;
    margin: 0 auto;
    
    &::before {
      display: none;
    }

    .lottie-container {
      width: 100%;
      margin-left: 0;
      filter: none;
    }
  }
`;

const TypedContainer = styled.div<{ $currentText: string }>`
  min-height: 2em;
  margin: 0.75rem 0;
  font-size: clamp(1rem, 5vw, 1.25rem);
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

  @media (min-width: 768px) {
    font-size: 2rem;
    margin: 1rem 0;
    white-space: nowrap;
    text-shadow: 
      0 0 7px rgba(27, 255, 255, 0.3),
      0 0 10px rgba(27, 255, 255, 0.2),
      0 0 21px rgba(27, 255, 255, 0.1);
    animation: neonPulse 2s ease-in-out infinite;
  }

  .typed-cursor {
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const TitleContainer = styled.div`
  margin-bottom: 0.5rem;
  text-align: center;
  width: 100%;

  @media (min-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const StyledH1 = styled.h1`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: clamp(2rem, 8vw, 2.5rem);
  margin-bottom: 0.5rem;
  line-height: 1.1;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif;
  font-weight: 700;
  background: linear-gradient(120deg, #FFFFFF, rgba(27, 255, 255, 0.8));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    font-size: clamp(3rem, 7vw, 5rem);
    margin-bottom: 1.5rem;
  }
`;

const AnimatedSpan = styled.span`
  display: inline-block;
  background: linear-gradient(120deg, #FFFFFF, rgba(27, 255, 255, 0.8));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
  font-size: 0.7em;
  padding-left: 3px;

  @media (min-width: 768px) {
    font-size: 0.8em;
    padding-left: 5px;
  }
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  opacity: 0.1;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Hero: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);
  const [currentText, setCurrentText] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const strings = [
    "Créateur de Sites Web",
    "Expert en Design Digital",
    "Solutions Web sur Mesure",
    "Votre Vision, Ma Mission"
  ];

  useEffect(() => {
    if (typedRef.current) {
      typed.current = new Typed(typedRef.current, {
        strings,
        typeSpeed: isMobile ? 50 : 60,
        backSpeed: isMobile ? 30 : 40,
        loop: true,
        showCursor: false,
        cursorChar: '|',
        fadeOut: false,
        onStringTyped: (arrayPos) => {
          setCurrentText(strings[arrayPos]);
        },
      });
    }

    return () => {
      typed.current?.destroy();
    };
  }, [isMobile]);

  const renderLottie = () => (
    <LottieWrapper
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="lottie-container">
        <DotLottieReact
          src="https://lottie.host/3f8692d6-12b0-49b5-a56f-bbe0f661f704/T3LstGsH06.lottie"
          loop
          autoplay
        />
      </div>
    </LottieWrapper>
  );

  return (
    <HeroSection id="home">
      {!isMobile && (
        <>
          <FloatingElement
            initial={{ x: 0, y: 0 }}
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ top: '20%', left: '10%' }}
          />
          <FloatingElement
            initial={{ x: 0, y: 0 }}
            animate={{ 
              x: [-100, 0, -100],
              y: [50, 0, 50],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ bottom: '20%', right: '10%' }}
          />
        </>
      )}
      <HeroContent>
        <HeroText>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6,
              delay: 0.2,
              ease: "easeOut"
            }}
          >
            <TitleContainer>
              <StyledH1>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  WebDesigner
                </motion.span>
                <AnimatedSpan>68</AnimatedSpan>
              </StyledH1>
            </TitleContainer>
            <TypedContainer $currentText={currentText}>
              <span ref={typedRef}></span>
            </TypedContainer>
            {isMobile && renderLottie()}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              {isMobile ? (
                <>
                  Je crée des sites web et des applications qui se démarquent par leur design moderne.<br />
                  <br />
                  Mon objectif : donner vie à vos idées avec des solutions digitales sur mesure.
                </>
              ) : (
                "Je crée des sites web et des applications qui se démarquent par leur design moderne et leur facilité d'utilisation. Mon objectif est de donner vie à vos idées avec des solutions digitales sur mesure."
              )}
            </motion.p>
            <ButtonGroup>
              <StyledButton
                className="primary"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={!isMobile ? { scale: 1.05 } : undefined}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                Me Contacter
                <FaArrowRight />
              </StyledButton>
              <StyledButton
                className="secondary"
                onClick={() => {
                  const element = document.querySelector('#services');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={!isMobile ? { scale: 1.05 } : undefined}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                Mes Services
                <FaArrowRight />
              </StyledButton>
            </ButtonGroup>
          </motion.div>
        </HeroText>
        {!isMobile && renderLottie()}
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
