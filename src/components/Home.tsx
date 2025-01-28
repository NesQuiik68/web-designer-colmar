import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { TypeAnimation } from 'react-type-animation';
import { Container, Button } from '../styles/SharedStyles';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Services from './Services';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 20%, rgba(46, 49, 146, 0.4) 0%, transparent 25%),
      radial-gradient(circle at 80% 80%, rgba(27, 255, 255, 0.4) 0%, transparent 25%);
    filter: blur(100px);
    z-index: 0;
  }
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  position: relative;
  text-align: center;
  
  background: linear-gradient(
    to bottom,
    #FFFFFF 0%,
    #F0F0F0 10%,
    #d0d0d0 20%,
    #FFFFFF 30%,
    #F0F0F0 40%,
    #d0d0d0 50%,
    #FFFFFF 60%,
    #F0F0F0 70%,
    #d0d0d0 80%,
    #FFFFFF 90%,
    #F0F0F0 100%
  );
  background-size: 100% 200%;
  animation: shine 5s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 
    0 0 5px rgba(255, 255, 255, 0.2),
    0 0 10px rgba(255, 255, 255, 0.1),
    0 0 15px rgba(255, 255, 255, 0.1);
  filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.2));
  
  @keyframes shine {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 0 -200%;
    }
  }
  
  &::before {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      transparent 45%,
      rgba(255, 255, 255, 0.4) 50%,
      transparent 55%
    );
    background-size: 200% 200%;
    animation: shimmer 3s infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 1;
  }
  
  @keyframes shimmer {
    0% {
      background-position: -100% 0;
    }
    100% {
      background-position: 100% 0;
    }
  }
  
  .typing-text {
    display: block;
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    margin-top: 0.5rem;
    background: linear-gradient(120deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 0 5px rgba(27, 255, 255, 0.2));
  }
`;

const AnimatedText = styled(motion.span)`
  display: inline-block;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  span {
    opacity: 0.9;
    transition: opacity 0.3s ease;
    
    &:hover {
      opacity: 1;
      color: var(--text-primary);
    }
  }
`;

const textCharacterAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const subtitleAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const wordAnimation = {
  hidden: {},
  visible: {},
};

const characterAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
};

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
`;

const HeroButton = styled(Button)`
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  position: relative;
  overflow: hidden;
  
  &.outline {
    background: transparent;
    border: 2px solid var(--secondary);
    color: var(--secondary);
    
    &:hover {
      background: linear-gradient(120deg, var(--primary), var(--secondary));
      border-color: transparent;
      color: white;
    }
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  
  span {
    color: var(--text-secondary);
    font-size: 0.9rem;
  }
  
  .arrow {
    width: 20px;
    height: 20px;
    border-right: 2px solid var(--secondary);
    border-bottom: 2px solid var(--secondary);
    transform: rotate(45deg);
    animation: bounce 2s infinite;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0) rotate(45deg);
    }
    40% {
      transform: translateY(-10px) rotate(45deg);
    }
    60% {
      transform: translateY(-5px) rotate(45deg);
    }
  }
`;

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
`;

const AnimationWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  filter: drop-shadow(0 0 20px rgba(27, 255, 255, 0.2));
`;

const Home: React.FC = () => {
  const subtitleText = "Je donne vie à vos projets web avec créativité et innovation. Des sites modernes qui captiveront vos visiteurs et boosteront votre présence en ligne.";

  return (
    <main>
      <HeroSection id="home">
        <Container>
          <AnimationWrapper>
            <DotLottieReact
              src="https://lottie.host/3f8692d6-12b0-49b5-a56f-bbe0f661f704/T3LstGsH07.lottie"
              loop
              autoplay
            />
          </AnimationWrapper>
          
          <HeroContent
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Title
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <TypeAnimation
                sequence={[
                  'Développeur Full-Stack',
                  2000,
                  'UI/UX Designer',
                  2000,
                  'Créateur Web',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </Title>
            
            <Subtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {subtitleText}
            </Subtitle>
            
            <ButtonContainer
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                className="secondary"
                onClick={() => {
                  const element = document.querySelector('#services');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Mes Services
                <FaArrowRight />
              </motion.button>
              <Link to="projects" smooth={true} duration={800}>
                <HeroButton
                  className="outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Voir mes Projets
                </HeroButton>
              </Link>
            </ButtonContainer>
          </HeroContent>
          
          <Link to="about" smooth={true} duration={800}>
            <ScrollIndicator
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <span>Découvrir</span>
              <div className="arrow"></div>
            </ScrollIndicator>
          </Link>
        </Container>
      </HeroSection>

      <Section id="about">
        <About />
      </Section>
    
      <Section id="services">
        <Services />
      </Section>
    
      <Section id="projects">
        <Projects />
      </Section>
    
      <Section id="contact">
        <Contact />
      </Section>
    </main>
  );
};

export default Home;
