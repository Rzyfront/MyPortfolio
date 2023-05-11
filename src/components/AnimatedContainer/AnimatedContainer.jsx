import React, { useEffect, useRef } from 'react';

const AnimatedContainer = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Ajusta el valor según tus necesidades
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Aplica la animación a los elementos dentro del contenedor
          entry.target.classList.add('fade-in');
        } else {
          entry.target.classList.remove('fade-in');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(containerRef.current);

    return () => {
      observer.unobserve(containerRef.current);
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
};

export default AnimatedContainer;
