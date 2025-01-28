import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { SectionTitle, Card, fadeInUpVariants, staggerContainerVariants } from '../styles/SharedStyles';

const AboutSection = styled.section`
  width: 100%;
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary));

  .glow-effect {
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: radial-gradient(circle at center, rgba(27, 255, 255, 0.15), transparent 70%);
    filter: blur(20px);
    pointer-events: none;
    z-index: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover .glow-effect {
    opacity: 1;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: radial-gradient(circle at 30% 50%, rgba(46, 49, 146, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 70% 50%, rgba(27, 255, 255, 0.1) 0%, transparent 50%);
    filter: blur(60px);
    z-index: 0;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const AnimationWrapper = styled(motion.div)`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 550px;
  margin-left: 2rem;

  .animation-container {
    position: relative;
    width: 100%;
    padding-bottom: 100%;
    overflow: hidden;
  }

  .lottie-background {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120%;
    height: 120%;
    background: radial-gradient(
      circle at center,
      rgba(27, 255, 255, 0.03) 0%,
      rgba(27, 255, 255, 0.01) 40%,
      transparent 70%
    );
    filter: blur(40px);
    opacity: 0.5;
    animation: pulse 4s ease-in-out infinite;
  }

  .lottie-player {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
    filter: drop-shadow(0 0 15px rgba(27, 255, 255, 0.2));
  }

  .decoration-circle {
    position: absolute;
    border-radius: 50%;
    opacity: 0.1;
    background: rgba(27, 255, 255, 0.5);
    filter: blur(20px);
  }

  .circle-1 {
    width: 100px;
    height: 100px;
    top: -20px;
    right: -20px;
  }

  .circle-2 {
    width: 150px;
    height: 150px;
    bottom: -30px;
    left: -30px;
    opacity: 0.05;
  }

  @keyframes pulse {
    0%, 100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.5;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.1);
      opacity: 0.3;
    }
  }

  @media (max-width: 968px) {
    max-width: 450px;
    margin: 3rem auto 0;

    .circle-1 {
      width: 80px;
      height: 80px;
    }

    .circle-2 {
      width: 120px;
      height: 120px;
    }
  }

  @media (max-width: 480px) {
    max-width: 320px;
  }
`;

const TextContent = styled(motion.div)`
  color: var(--text-secondary);
  position: relative;

  h2 {
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    margin-bottom: 1.5rem;
    background: linear-gradient(120deg, #FFFFFF, #B8B8B8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, var(--primary), var(--secondary));
      transform: scaleX(0);
      transform-origin: left;
      animation: slideIn 0.8s ease forwards 0.5s;
    }
  }

  .highlight {
    color: var(--primary);
    font-weight: 600;
  }

  .bio-text {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    opacity: 0.9;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin: 3rem 0;

    .stat-item {
      background: rgba(255, 255, 255, 0.03);
      padding: 2rem 1.5rem;
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.05);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      text-align: center;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(
          circle at center,
          rgba(27, 255, 255, 0.1),
          transparent 70%
        );
        opacity: 0;
        transition: opacity 0.4s ease;
      }

      &:hover {
        transform: translateY(-5px);
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(27, 255, 255, 0.2);

        &::before {
          opacity: 1;
        }

        .icon-wrapper {
          transform: rotateY(360deg);
        }
      }

      .icon-wrapper {
        width: 50px;
        height: 50px;
        margin: 0 auto 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 15px;
        transition: transform 0.8s ease;

        .icon {
          font-size: 1.8rem;
        }
      }

      .number {
        font-size: 2.5rem;
        font-weight: 700;
        background: linear-gradient(120deg, var(--primary), var(--secondary));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 0.5rem;
      }

      .label {
        font-size: 1rem;
        font-weight: 600;
        color: #fff;
        margin-bottom: 0.5rem;
        line-height: 1.4;
      }

      .description {
        font-size: 0.9rem;
        opacity: 0.7;
        line-height: 1.4;
      }
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
`;

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      rgba(27, 255, 255, 0.1),
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    border-color: rgba(27, 255, 255, 0.2);
    
    &::before {
      opacity: 1;
    }

    .skill-icon-wrapper {
      transform: rotateY(360deg);
    }
  }

  .skill-icon-wrapper {
    width: 60px;
    height: 60px;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 18px;
    transition: transform 0.8s ease;

    .skill-icon {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: #fff;
  }

  p {
    font-size: 1rem;
    opacity: 0.8;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .skill-features {
    margin-bottom: 1.5rem;

    .feature {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.8rem;
      font-size: 0.95rem;
      opacity: 0.9;

      .check {
        color: var(--primary);
        font-weight: bold;
      }
    }
  }

  .skill-level {
    height: 4px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
    overflow: hidden;

    .fill {
      height: 100%;
      background: linear-gradient(90deg, var(--primary), var(--secondary));
      transform-origin: left;
      animation: fillWidth 1.5s ease forwards;
    }
  }

  @keyframes fillWidth {
    from { transform: scaleX(0); }
    to { transform: scaleX(var(--width)); }
  }
`;

const SkillsSection = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 3rem 0;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FloatingParticle = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--secondary);
  border-radius: 50%;
  filter: blur(1px);
`;

const About: React.FC = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const sectionRef = React.useRef<HTMLElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isMobile]);

  const mobileCardAnimation = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.2 }
    }
  };

  const mobileSkillAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.15 }
    }
  };

  return (
    <AboutSection id="about" ref={sectionRef}>
      {!isMobile && (
        <div 
          className="glow-effect"
          style={{
            left: mousePosition.x - 75,
            top: mousePosition.y - 75
          }}
        />
      )}
      <ContentWrapper>
        <SectionTitle
          initial={{ opacity: 0, y: isMobile ? 15 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: isMobile ? "-50px" : "0px" }}
          transition={{ duration: isMobile ? 0.2 : 0.6 }}
        >
          Mon Expertise
        </SectionTitle>
        
        <AboutContent>
          <TextContent
            initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: isMobile ? "-50px" : "0px" }}
            transition={{ duration: isMobile ? 0.2 : 0.8 }}
          >
            <h2>Développeur Web Passionné</h2>
            <p className="bio-text">
              Je donne vie à vos projets web en alliant créativité et expertise technique. Mon approche combine les dernières technologies avec une vision claire de vos objectifs. Chaque <span className="highlight">site web</span> que je crée est pensé pour être à la fois moderne, performant et parfaitement adapté à vos besoins.
            </p>
            <div className="stats-grid">
              {[
                {
                  icon: "🌟",
                  number: "100%",
                  label: "Engagement\nQualité",
                  description: "La satisfaction au cœur de chaque projet",
                  delay: isMobile ? 0 : 0.1
                },
                {
                  icon: "🚀",
                  number: "3+",
                  label: "Années\nd'Expérience",
                  description: "Expertise confirmée en développement",
                  delay: isMobile ? 0 : 0.2
                },
                {
                  icon: "💎",
                  number: "50+",
                  label: "Projets\nRéussis",
                  description: "Des solutions qui font la différence",
                  delay: isMobile ? 0 : 0.3
                },
                {
                  icon: "🤝",
                  number: "24/7",
                  label: "Support\nDédié",
                  description: "Un accompagnement sur mesure",
                  delay: isMobile ? 0 : 0.4
                }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat-item"
                  variants={isMobile ? mobileCardAnimation : undefined}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: isMobile ? "-50px" : "0px" }}
                  transition={{ delay: stat.delay }}
                  whileHover={!isMobile ? { 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  } : undefined}
                >
                  <div className="icon-wrapper">
                    <span className="icon">{stat.icon}</span>
                  </div>
                  <div className="number">{stat.number}</div>
                  <div className="label">{stat.label}</div>
                  <div className="description">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </TextContent>

          <AnimationWrapper
            initial={{ opacity: 0, scale: isMobile ? 0.95 : 0.8, x: isMobile ? 0 : 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: isMobile ? "-50px" : "0px" }}
            transition={{ duration: isMobile ? 0.2 : 0.8 }}
          >
            <div className="animation-container">
              <div className="lottie-background" />
              {!isMobile && (
                <>
                  <div className="decoration-circle circle-1" />
                  <div className="decoration-circle circle-2" />
                </>
              )}
              <DotLottieReact
                src="https://lottie.host/1f9284de-aa68-4d59-90dc-bb79c1003be6/dcgpnGLEPv.lottie"
                loop
                autoplay
                className="lottie-player"
              />
            </div>
          </AnimationWrapper>
        </AboutContent>

        <SkillsSection
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: isMobile ? "-50px" : "0px" }}
          variants={isMobile ? {
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          } : {
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          {[
            {
              icon: "🎨",
              title: "Design Créatif",
              description: "Je crée des interfaces modernes qui captivent vos visiteurs tout en restant intuitives et accessibles. L'expérience utilisateur est au cœur de chaque décision de design.",
              features: ["Design responsive", "Navigation intuitive", "Expérience immersive"],
              level: 0.95
            },
            {
              icon: "⚡",
              title: "Performance & Fiabilité",
              description: "Des solutions web rapides et robustes qui ne vous laisseront jamais tomber. La performance est optimisée pour une expérience fluide sur tous les appareils.",
              features: ["Chargement optimisé", "Code propre", "Sécurité renforcée"],
              level: 0.90
            },
            {
              icon: "🌍",
              title: "Rayonnement Web",
              description: "Je m'assure que votre site se démarque et atteint son public. Les bonnes pratiques SEO sont intégrées naturellement pour une visibilité optimale.",
              features: ["SEO intelligent", "Analyse des données", "Stratégie digitale"],
              level: 0.85
            }
          ].map((skill, index) => (
            <SkillCard
              key={index}
              variants={isMobile ? mobileSkillAnimation : undefined}
              whileHover={!isMobile ? { 
                scale: 1.05,
                transition: { duration: 0.3 }
              } : undefined}
              whileTap={isMobile ? { scale: 0.98 } : { scale: 0.95 }}
            >
              <motion.div 
                className="skill-icon-wrapper"
                whileHover={!isMobile ? { rotate: 360 } : undefined}
                transition={{ duration: 0.8 }}
              >
                <span className="skill-icon">{skill.icon}</span>
              </motion.div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <div className="skill-features">
                {skill.features.map((feature, i) => (
                  <span key={i} className="feature">{feature}</span>
                ))}
              </div>
              <div className="skill-level">
                <div 
                  className="level-bar"
                  style={{ transform: `scaleX(${skill.level})` }}
                />
              </div>
            </SkillCard>
          ))}
        </SkillsSection>
      </ContentWrapper>
    </AboutSection>
  );
};

export default About;
