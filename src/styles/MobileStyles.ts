import { css } from 'styled-components';

export const MobileStyles = css`
  @media (max-width: 768px) {
    /* Global Adjustments */
    h1 {
      font-size: 2rem !important;
    }

    h2 {
      font-size: 1.75rem !important;
    }

    h3 {
      font-size: 1.5rem !important;
    }

    /* Hero Section */
    .hero-content {
      flex-direction: column;
      padding: 2rem 1rem;
      gap: 2rem;
    }

    .hero-text {
      width: 100%;
      text-align: center;
    }

    .hero-lottie {
      width: 100%;
      max-width: 400px;
    }

    /* Services Section */
    .services-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      padding: 0 1rem;
    }

    .service-card {
      padding: 1.5rem;
    }

    .service-lottie {
      width: 100px;
      height: 100px;
    }

    /* Projects Section */
    .projects-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      padding: 0 1rem;
    }

    .project-card {
      min-height: 300px;
    }

    /* Testimonials Section */
    .testimonial-wrapper {
      padding: 0 1rem;
    }

    .testimonial-card {
      padding: 1.5rem;
      width: 100%;
    }

    .testimonial-navigation {
      bottom: -3rem;
    }

    /* Contact Section */
    .contact-content {
      flex-direction: column;
      gap: 2rem;
      padding: 0 1rem;
    }

    .contact-form,
    .contact-info {
      width: 100%;
    }

    /* Header */
    .nav-menu {
      position: fixed;
      top: var(--header-height);
      right: 0;
      width: 100%;
      height: calc(100vh - var(--header-height));
      background: rgba(10, 10, 10, 0.95);
      backdrop-filter: blur(10px);
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      padding: 2rem;
      transform: translateX(100%);
      transition: transform 0.3s ease-in-out;
    }

    .nav-menu.open {
      transform: translateX(0);
    }

    .nav-menu a {
      font-size: 1.25rem;
    }

    .menu-button {
      display: block;
    }
  }
`;
