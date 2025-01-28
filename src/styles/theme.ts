export const theme = {
  colors: {
    primary: 'var(--primary)',
    secondary: 'var(--secondary)',
    accent: 'var(--accent)',
    background: 'var(--bg-primary)',
    text: 'var(--text-primary)',
    textSecondary: 'var(--text-secondary)'
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1280px'
  }
};

export type Theme = typeof theme;
