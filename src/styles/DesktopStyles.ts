import { css } from 'styled-components';

export const DesktopStyles = css`
  @media (min-width: 769px) {
    /* Hero Section */
    .hero-content {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0 4rem;
    }

    .hero-text {
      width: 50%;
      text-align: left;
    }

    .hero-lottie {
      width: 45%;
      max-width: 600px;
    }

    /* Services Section */
    .services-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    .service-card {
      padding: 2.5rem;
    }

    .service-lottie {
      width: 150px;
      height: 150px;
    }

    /* Projects Section */
    .projects-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 2.5rem;
    }

    .project-card {
      min-height: 400px;
    }

    /* Testimonials Section */
    .testimonial-wrapper {
      padding: 0 4rem;
    }

    .testimonial-card {
      padding: 3rem;
      max-width: 800px;
    }

    /* Contact Section */
    .contact-content {
      flex-direction: row;
      justify-content: space-between;
      gap: 4rem;
    }

    .contact-form {
      width: 50%;
    }

    .contact-info {
      width: 40%;
    }

    /* Header */
    .nav-menu {
      display: flex !important;
      position: relative;
      background: none;
      padding: 0;
      width: auto;
      height: auto;
      transform: none;
    }

    .nav-menu a {
      margin: 0 1.5rem;
      font-size: 1rem;
    }

    .menu-button {
      display: none;
    }
  }
`;
