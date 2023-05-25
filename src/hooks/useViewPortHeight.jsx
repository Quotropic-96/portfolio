import { useState, useEffect } from 'react';

export const useViewportHeight = () => {
  const [vh, setVh] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setVh(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  return vh;
};
