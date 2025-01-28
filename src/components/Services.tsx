import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SectionTitle } from '../styles/SharedStyles';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ServicesSection = styled.section`
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

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
  position: relative;

  @media (max-width: 768px) {
    margin-top: 2rem;
    gap: 2rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at center,
      rgba(27, 255, 255, 0.03) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

const ServiceCard = styled(motion.div)`
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

const ServiceVisual = styled(motion.div)`
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

const ServiceContent = styled(motion.div)`
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
    }
  }
`;

const FeaturesList = styled.ul`
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

const FeatureItem = styled.li`
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

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: rgba(27, 255, 255, 0.9);
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-top: 1rem;
  }
`;

const services = [
  {
    lottie: "https://lottie.host/9ef1b27d-69af-4301-bdf4-1e6254f2bc6c/QCvTp0OiW1.lottie",
    title: 'Sites Vitrines',
    description: 'Un site web qui raconte votre histoire et captive vos visiteurs. Je crée des expériences uniques qui reflètent votre identité et engagent votre audience.',
    features: [
      'Design sur mesure',
      'Mobile-first',
      'Animations fluides',
      'SEO optimisé'
    ],
    price: '500€'
  },
  {
   lottie: "https://lottie.host/d30be59c-df68-4e9e-ba98-770febc5c31e/cT8pmgnMtC.lottie",
    title: 'E-commerce',
    description: 'Transformez vos visiteurs en clients avec une boutique en ligne attractive et performante. Une expérience d\'achat fluide qui donne envie de revenir.',
    features: [
      'Paiement sécurisé',
      'Gestion intuitive',
      'Catalogue dynamique',
      'Suivi commandes'
    ],
    price: '750€'
  },
  {
    lottie: "https://lottie.host/4c2e68bd-21e1-4f06-b2e5-b84df9a6bf5b/uYV5jgp1eJ.lottie",
    title: 'Applications Web',
    description: 'Des solutions sur mesure qui simplifient votre quotidien. Je développe des applications web intuitives qui répondent précisément à vos besoins.',
    features: [
      'Interface intuitive',
      'Performance optimale',
      'API robuste',
      'Support dédié'
    ],
    price: '1000€'
  }
];

const Services: React.FC = () => {
  return (
    <ServicesSection id="services">
      <ContentWrapper>
        <SectionTitle
          as={motion.h2}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Mes Services
        </SectionTitle>

        <ServicesContainer>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <ServiceVisual
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {service.lottie ? (
                  <DotLottieReact
                    src={service.lottie}
                    loop
                    autoplay
                  />
                ) : (
                  <span className="service-icon">{service.lottie}</span>
                )}
              </ServiceVisual>

              <ServiceContent>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                
                <FeaturesList>
                  {service.features.map((feature, idx) => (
                    <FeatureItem key={idx}>{feature}</FeatureItem>
                  ))}
                </FeaturesList>

                <Price>À partir de {service.price}</Price>
              </ServiceContent>
            </ServiceCard>
          ))}
        </ServicesContainer>
      </ContentWrapper>
    </ServicesSection>
  );
};

export default Services;
