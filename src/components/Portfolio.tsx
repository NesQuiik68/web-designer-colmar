import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, SectionTitle, fadeInUpVariants, staggerContainerVariants } from '../styles/SharedStyles';

const PortfolioContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FilterContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const FilterButton = styled(motion.button)<{ active: boolean }>`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 25px;
  background: ${props => props.active 
    ? 'linear-gradient(120deg, #2E3192, #1BFFFF)'
    : 'linear-gradient(120deg, rgba(46, 49, 146, 0.1), rgba(27, 255, 255, 0.1))'};
  color: ${props => props.active ? 'white' : '#2E3192'};
  font-weight: 600;
  cursor: pointer;
  border: 1px solid rgba(27, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
`;

const ProjectCard = styled(motion.div)`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover {
    img {
      transform: scale(1.05);
    }

    .project-info {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ProjectInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 0.9rem;
    opacity: 0.9;
    margin-bottom: 1rem;
  }
`;

const TechTag = styled(motion.span)`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  margin: 0.2rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  font-size: 0.8rem;
`;

const projects = [
  {
    id: 1,
    title: "E-commerce Modern",
    description: "Une plateforme e-commerce complète avec panier et paiement",
    image: "/path-to-image.jpg",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "Application Mobile Fitness",
    description: "Application de suivi d'entraînement personnalisé",
    image: "/path-to-image.jpg",
    category: "mobile",
    technologies: ["React Native", "Firebase"]
  },
  {
    id: 3,
    title: "Dashboard Analytics",
    description: "Interface d'administration avec visualisation de données",
    image: "/path-to-image.jpg",
    category: "web",
    technologies: ["Vue.js", "D3.js", "Express"]
  },
  // Ajoutez plus de projets ici
];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'Tous' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'design', label: 'Design' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <PortfolioContainer>
      <SectionTitle
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpVariants}
      >
        Mes Projets
      </SectionTitle>

      <FilterContainer
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {filters.map(filter => (
          <FilterButton
            key={filter.id}
            active={activeFilter === filter.id}
            onClick={() => setActiveFilter(filter.id)}
            variants={fadeInUpVariants}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter.label}
          </FilterButton>
        ))}
      </FilterContainer>

      <ProjectsGrid
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {filteredProjects.map(project => (
          <ProjectCard
            key={project.id}
            variants={fadeInUpVariants}
            whileHover={{ y: -10 }}
          >
            <img src={project.image} alt={project.title} />
            <ProjectInfo className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div>
                {project.technologies.map((tech, index) => (
                  <TechTag
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {tech}
                  </TechTag>
                ))}
              </div>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </PortfolioContainer>
  );
};

export default Portfolio;
