import React, { useState, useEffect, useRef } from 'react';

const FadeIn = ({ children, delay = 0, direction = 'up', fullWidth = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });
    
    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }
    
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  const getTransform = () => {
    switch(direction) {
      case 'up': return isVisible ? 'translateY(0)' : 'translateY(20px)';
      case 'left': return isVisible ? 'translateX(0)' : 'translateX(20px)';
      case 'right': return isVisible ? 'translateX(0)' : 'translateX(-20px)';
      default: return 'none';
    }
  };

  return (
    <div
      ref={domRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
        width: fullWidth ? '100%' : 'auto',
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
