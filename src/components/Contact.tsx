import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../styles/SharedStyles';
import { FaEnvelope, FaSnapchat, FaArrowRight } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ContactSection = styled.section`
  padding: 8rem 2rem;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, 
    rgba(0, 0, 0, 0) 0%,
    rgba(27, 255, 255, 0.03) 50%,
    rgba(0, 0, 0, 0) 100%
  );

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

const ContactContainer = styled.div`
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
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactIntro = styled.div`
  margin-bottom: 2rem;

  h3 {
    font-size: 2rem;
    color: #fff;
    margin-bottom: 1rem;
    background: linear-gradient(120deg, #fff, rgba(27, 255, 255, 0.8));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    font-size: 1.1rem;
  }
`;

const ContactCard = styled(motion.a)`
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
      rgba(27, 255, 255, 0.05),
      transparent
    );
    transform: translateX(-100%);
    transition: 0.5s;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(27, 255, 255, 0.2);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

    &::before {
      transform: translateX(100%);
    }

    svg {
      transform: scale(1.2);
    }
  }

  svg {
    font-size: 2rem;
    color: rgba(27, 255, 255, 0.8);
    transition: transform 0.3s ease;
  }
`;

const ContactText = styled.div`
  h3 {
    font-size: 1.2rem;
    color: rgba(27, 255, 255, 0.9);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;

const ContactForm = styled(motion.form)`
  background: rgba(27, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(27, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(
      90deg,
      rgba(27, 255, 255, 0.5),
      rgba(27, 255, 255, 0.2)
    );
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  color: rgba(27, 255, 255, 0.8);
  margin-bottom: 0.5rem;
  display: block;
`;

const Input = styled.input`
  padding: 1rem 1.5rem;
  background: rgba(27, 255, 255, 0.03);
  border: 1px solid rgba(27, 255, 255, 0.1);
  border-radius: 12px;
  color: #fff;
  font-size: 1rem;
  width: 100%;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(27, 255, 255, 0.5);
    box-shadow: 0 0 15px rgba(27, 255, 255, 0.1);
    background: rgba(27, 255, 255, 0.05);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem 1.5rem;
  background: rgba(27, 255, 255, 0.03);
  border: 1px solid rgba(27, 255, 255, 0.1);
  border-radius: 12px;
  color: #fff;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  width: 100%;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(27, 255, 255, 0.5);
    box-shadow: 0 0 15px rgba(27, 255, 255, 0.1);
    background: rgba(27, 255, 255, 0.05);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: linear-gradient(
    135deg,
    rgba(27, 255, 255, 0.2),
    rgba(27, 255, 255, 0.1)
  );
  border: 1px solid rgba(27, 255, 255, 0.3);
  border-radius: 12px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;

  svg {
    transition: transform 0.3s ease;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(27, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(27, 255, 255, 0.3),
      rgba(27, 255, 255, 0.2)
    );
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(27, 255, 255, 0.1);

    &::before {
      left: 100%;
    }

    svg {
      transform: translateX(5px);
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

const SuccessMessage = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.95);
  padding: 2.5rem;
  border-radius: 20px;
  text-align: center;
  z-index: 1000;
  box-shadow: 0 0 50px rgba(27, 255, 255, 0.1);
  border: 1px solid rgba(27, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  max-width: 400px;
  width: 90%;

  h3 {
    color: #fff;
    margin: 1rem 0;
    font-size: 1.5rem;
    background: linear-gradient(120deg, #fff, rgba(27, 255, 255, 0.8));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  .lottie-container {
    width: 150px;
    height: 150px;
    margin: 0 auto;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 999;
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        'service_ofl9bgn',
        'template_25493qq',
        form.current!,
        'Kr8wyTG3ZLYmN_gnx'
      );

      if (result.text === 'OK') {
        setFormData({ user_name: '', user_email: '', message: '' });
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue. Veuillez réessayer plus tard.');
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <ContactSection id="contact">
      <AnimatePresence>
        {showSuccess && (
          <>
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <SuccessMessage
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <div className="lottie-container">
                <DotLottieReact
                  src="https://lottie.host/b13b542d-bb71-4985-a162-14a7fdc0f32e/QuVxh7c9cA.lottie"
                  loop
                  autoplay
                />
              </div>
              <h3>Message envoyé avec succès !</h3>
              <p>Merci de m'avoir contacté. Je vous répondrai dans les plus brefs délais.</p>
            </SuccessMessage>
          </>
        )}
      </AnimatePresence>

      <SectionTitle
        as={motion.h2}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Contact
      </SectionTitle>

      <ContactContainer>
        <ContactInfo>
          <ContactIntro>
            <h3>Discutons de votre projet</h3>
            <p>N'hésitez pas à me contacter pour discuter de vos projets ou pour toute question. Je suis là pour vous aider à concrétiser vos idées.</p>
          </ContactIntro>

          <ContactCard
            href="mailto:contact.webdesigner68@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FaEnvelope />
            <ContactText>
              <h3>Email</h3>
              <p>contact.webdesigner68@gmail.com</p>
            </ContactText>
          </ContactCard>

          <ContactCard
            href="https://www.snapchat.com/add/webdesigner68"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FaSnapchat />
            <ContactText>
              <h3>Snapchat</h3>
              <p>webdesigner68</p>
            </ContactText>
          </ContactCard>
        </ContactInfo>

        <ContactForm
          ref={form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <FormGroup>
            <Label>Nom</Label>
            <Input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              required
              placeholder="Votre nom"
            />
          </FormGroup>

          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
              placeholder="votre@email.com"
            />
          </FormGroup>

          <FormGroup>
            <Label>Message</Label>
            <TextArea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Décrivez votre projet..."
            />
          </FormGroup>

          <SubmitButton
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
            <FaArrowRight />
          </SubmitButton>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
