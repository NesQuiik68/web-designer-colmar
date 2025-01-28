import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMousePointer } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: 8rem 0;
  position: relative;
  background: linear-gradient(180deg, 
    rgba(0, 0, 0, 0) 0%,
    rgba(27, 255, 255, 0.02) 50%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 4rem;
`;

const StyledTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: #fff;
  display: inline-block;
  background: linear-gradient(120deg, #FFFFFF, rgba(27, 255, 255, 0.9));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  padding-bottom: 1rem;
  margin: 0 auto;

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
  }
`;

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ProjectsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectsIntro = styled.div`
  max-width: 800px;
  margin: 0 auto 4rem;
  text-align: center;
  
  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const ProjectsGrid = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  padding: 1rem;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    max-width: 800px;
  }
`;

const ProjectCardContainer = styled(motion.div)`
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  background: rgba(27, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(27, 255, 255, 0.1);
  height: 600px;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 24px;
    padding: 1px;
    background: linear-gradient(
      45deg,
      rgba(27, 255, 255, 0.1),
      rgba(27, 255, 255, 0.2),
      rgba(27, 255, 255, 0.1)
    );
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  &:hover {
    .project-video {
      opacity: 1;
    }

    .project-image {
      opacity: 0;
    }

    .project-content {
      opacity: 0;
    }

    .hover-message {
      opacity: 0;
    }
  }
`;

const ProjectImage = styled.div<{ image: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(1.02);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0.15;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
    opacity: 0.7;
    transition: opacity 0.5s ease;
  }
`;

const ProjectVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 2;
  background: #000;
`;

const ProjectContent = styled.div`
  position: relative;
  height: 100%;
  padding: 2.5rem;
  color: white;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(135deg, 
    rgba(27, 255, 255, 0.05) 0%,
    rgba(27, 255, 255, 0.02) 100%
  );
  display: flex;
  flex-direction: column;
  z-index: 1;

  h3 {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(120deg, #FFFFFF, rgba(27, 255, 255, 0.8));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
    line-height: 1.3;
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 2rem;
    font-size: 1.1rem;
    line-height: 1.7;
    opacity: 0.9;
    flex: 1;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 4rem; 
  padding-top: 1rem;
  border-top: 1px solid rgba(27, 255, 255, 0.1);
`;

const TechItem = styled.span`
  padding: 0.6rem 1.2rem;
  background: rgba(27, 255, 255, 0.1);
  border: 1px solid rgba(27, 255, 255, 0.2);
  border-radius: 50px;
  font-size: 0.9rem;
  color: rgba(27, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(27, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const HoverMessage = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.8rem 1.2rem;
  background: rgba(27, 255, 255, 0.1);
  border: 1px solid rgba(27, 255, 255, 0.2);
  border-radius: 50px;
  font-size: 0.9rem;
  color: rgba(27, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  z-index: 2;
  white-space: nowrap;

  svg {
    font-size: 1.1rem;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-3px);
    }
    60% {
      transform: translateY(-2px);
    }
  }
`;

const projects: any[] = [
  {
    title: "Site Nutritionniste",
    description: "Site web pour une nutritionniste avec système de prise de rendez-vous en ligne, blog, et espace client personnalisé. Interface administrateur pour la gestion des rendez-vous et des contenus.",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&auto=format",
    video: "https://webm.land/media/0HJw.webm",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Calendly API"]
  },
  {
    title: "Site Réparateur",
    description: "Site web pour un réparateur informatique permettant aux clients de demander des devis en ligne, suivre l'état de leurs réparations et gérer leurs appareils. Interface administrateur complète pour la gestion des devis et réparations.",
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&auto=format",
    video: "https://webm.land/media/MQKD.webm",
    techStack: ["React", "Firebase", "Material-UI", "Node.js", "SendGrid"]
  },
  {
    title: "Application Boulangerie",
    description: "Application de gestion des commandes pour une boulangerie artisanale permettant aux clients de commander à l'avance. Inclut un système de personnalisation pour les gâteaux spéciaux, des notifications push pour les commandes prêtes, et une section 'produits du jour'.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format",
    video: "https://webm.land/media/temp/MpQK.webm",
    techStack: ["React Native", "Firebase", "Node.js", "Push Notifications", "Stripe"]
  },
  {
    title: "Application Restaurant",
    description: "Application de commandes pour un restaurant de burgers avec menu interactif et système de paiement intégré. Comprend une carte de fidélité digitale, des notifications push pour le suivi des commandes, et un système de commande à emporter optimisé.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format",
    video: "https://webm.land/media/Mwp9.webm",
    techStack: ["React Native", "Redux", "Node.js", "MongoDB", "Stripe", "PayPal"]
  }
];

const ProjectCard: React.FC<{ project: any }> = ({ project }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch(err => console.log(err));
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered]);

  return (
    <ProjectCardContainer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ProjectImage className="project-image" image={project.image} />
      <ProjectVideo
        ref={videoRef}
        className="project-video"
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={project.video} type="video/webm" />
      </ProjectVideo>
      <ProjectContent className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <TechStack>
          {project.techStack.map((tech: any, techIndex: number) => (
            <TechItem key={techIndex}>{tech}</TechItem>
          ))}
        </TechStack>
      </ProjectContent>
      <HoverMessage className="hover-message">
        <FaMousePointer /> Survolez pour voir la démo
      </HoverMessage>
    </ProjectCardContainer>
  );
};

const Projects: React.FC = () => {
  return (
    <ProjectsSection id="projets">
      <ProjectsContainer>
        <TitleWrapper>
          <StyledTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Mes Projets
          </StyledTitle>
        </TitleWrapper>
        
        <ProjectsContent>
          <ProjectsIntro>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Découvrez une sélection de mes réalisations récentes.
              Chaque projet est une opportunité de créer quelque chose d'unique
              et d'innovant.
            </motion.p>
          </ProjectsIntro>

          <ProjectsGrid>
            {projects.map((project: any, index: number) => (
              <ProjectCard key={index} project={project} />
            ))}
          </ProjectsGrid>
        </ProjectsContent>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
