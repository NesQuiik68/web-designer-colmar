import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: rgba(10, 15, 30, 0.95);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(27, 255, 255, 0.1);
  padding: 4rem 0 2rem 0;
  color: rgba(255, 255, 255, 0.8);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  background: linear-gradient(120deg, #FFFFFF, rgba(27, 255, 255, 0.9));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
`;

const FooterText = styled.p`
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
`;

const FooterLink = styled(motion.a)`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    color: rgba(27, 255, 255, 0.9);
    transform: translateX(5px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled(motion.a)`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    color: rgba(27, 255, 255, 0.9);
    background: rgba(27, 255, 255, 0.2);
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>À Propos</FooterTitle>
          <FooterText>
            Développeur web passionné, je crée des solutions digitales innovantes
            et sur mesure pour donner vie à vos projets.
          </FooterText>
          <SocialLinks>
            <SocialIcon
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </SocialIcon>
            <SocialIcon
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Navigation</FooterTitle>
          <FooterLink href="#accueil" whileHover={{ x: 5 }}>
            Accueil
          </FooterLink>
          <FooterLink href="#expertise" whileHover={{ x: 5 }}>
            Mon Expertise
          </FooterLink>
          <FooterLink href="#services" whileHover={{ x: 5 }}>
            Services
          </FooterLink>
          <FooterLink href="#projets" whileHover={{ x: 5 }}>
            Projets
          </FooterLink>
          <FooterLink href="#temoignages" whileHover={{ x: 5 }}>
            Témoignages
          </FooterLink>
          <FooterLink href="#contact" whileHover={{ x: 5 }}>
            Contact
          </FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contact</FooterTitle>
          <FooterLink href="mailto:contact.webdesigner68@example.com" whileHover={{ x: 5 }}>
            <FaEnvelope />
            contact.webdesigner68@example.com
          </FooterLink>
          <FooterText>
            N'hésitez pas à me contacter pour discuter de vos projets
            ou pour toute autre question.
          </FooterText>
        </FooterSection>
      </FooterContent>

      <Copyright>
        {new Date().getFullYear()} WebDesigner68
        (RAYANE HAMADA). Tous droits réservéSs.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
