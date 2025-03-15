import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const useScrollToSection = () => {
  const navigate = useNavigate();
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash, pathname]);

  const scrollToSection = (sectionId: string) => {
    // Special case for home/top of page
    if (sectionId === '#') {
      if (pathname !== '/') {
        navigate('/');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (pathname !== '/') {
      navigate('/');
      // Add small delay to ensure navigation completes before scrolling
      setTimeout(() => {
        const element = document.querySelector(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return scrollToSection;
};