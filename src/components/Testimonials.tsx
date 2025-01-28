import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaQuoteRight, FaStar } from 'react-icons/fa';
import { SectionTitle } from '../styles/SharedStyles';

const TestimonialsSection = styled.section`
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

const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const TestimonialsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  margin-top: 2rem;
`;

const TestimonialWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TestimonialCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    border-color: rgba(27, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.08);
  }
`;

const TestimonialContent = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorInfo = styled.div`
  h4 {
    color: #fff;
    margin: 0;
  }
  
  p {
    color: rgba(27, 255, 255, 0.8);
    margin: 0;
    font-size: 0.9rem;
  }
`;

const Avatar = styled.div<{ image: string }>`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 2rem;
  position: relative;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  border: 3px solid rgba(27, 255, 255, 0.1);
  box-shadow: 0 0 20px rgba(27, 255, 255, 0.2);

  &::before {
    content: '';
    position: absolute;
    inset: -5px;
    border-radius: 50%;
    padding: 5px;
    background: linear-gradient(
      45deg,
      rgba(27, 255, 255, 0.2),
      rgba(27, 255, 255, 0.1)
    );
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

const QuoteIcon = styled.div`
  font-size: 1.5rem;
  color: rgba(27, 255, 255, 0.3);
  margin: 1rem 0;
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--text-primary);
  margin: 1.5rem 0;
  position: relative;
  z-index: 1;
`;

const AuthorName = styled.h3`
  font-size: 1.4rem;
  color: rgba(27, 255, 255, 0.9);
  margin: 0.5rem 0;
`;

const AuthorTitle = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  opacity: 0.8;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(27, 255, 255, 0.1);
  border: 1px solid rgba(27, 255, 255, 0.2);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(27, 255, 255, 0.8);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;

  &:hover {
    background: rgba(27, 255, 255, 0.2);
    transform: translateY(-50%) scale(1.1);
  }

  &.prev {
    left: 0;
  }

  &.next {
    right: 0;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 0.8rem;
  }
`;

const StarsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 1.5rem 0;
`;

const Star = styled(FaStar)`
  color: #FFD700;
  font-size: 1.5rem;
  filter: drop-shadow(0 0 2px rgba(255, 215, 0, 0.5));
`;

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Directrice Marketing",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "Travailler avec Hamada a été une expérience exceptionnelle. Sa créativité et son attention aux détails ont transformé notre vision en une réalité époustouflante. Je recommande vivement ses services à quiconque cherche un développeur web talentueux.",
    stars: 5
  },
  {
    id: 2,
    name: "Marc Dubois",
    title: "CEO, TechStart",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    text: "L'expertise technique de Hamada combinée à son sens du design nous a permis de créer un site web qui dépasse toutes nos attentes. Sa capacité à comprendre nos besoins et à les traduire en solutions innovantes est remarquable.",
    stars: 5
  },
  {
    id: 3,
    name: "Emma Laurent",
    title: "Designer UX/UI",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    text: "En tant que designer, je suis impressionnée par la capacité de Hamada à transformer mes maquettes en sites web parfaitement fonctionnels. Sa maîtrise technique et son souci du détail font de lui un développeur exceptionnel.",
    stars: 5
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <TestimonialsSection id="temoignages">
      <TestimonialsContainer>
        <TitleWrapper>
          <StyledTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Témoignages
          </StyledTitle>
        </TitleWrapper>

        <TestimonialsContent>
          <TestimonialWrapper>
            <NavigationButton className="prev" onClick={handlePrevious}>
              <FaChevronLeft />
            </NavigationButton>

            <AnimatePresence initial={false} custom={currentIndex}>
              <TestimonialCard
                key={currentIndex}
                custom={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
              >
                <Avatar image={testimonials[currentIndex].image} />
                <StarsContainer>
                  {[...Array(testimonials[currentIndex].stars)].map((_, i) => (
                    <Star key={i} />
                  ))}
                </StarsContainer>
                <QuoteIcon>
                  <FaQuoteLeft />
                </QuoteIcon>
                <TestimonialText>
                  {testimonials[currentIndex].text}
                </TestimonialText>
                <QuoteIcon>
                  <FaQuoteRight />
                </QuoteIcon>
                <AuthorName>{testimonials[currentIndex].name}</AuthorName>
                <AuthorTitle>{testimonials[currentIndex].title}</AuthorTitle>
              </TestimonialCard>
            </AnimatePresence>

            <NavigationButton className="next" onClick={handleNext}>
              <FaChevronRight />
            </NavigationButton>
          </TestimonialWrapper>
        </TestimonialsContent>
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

export default Testimonials;
