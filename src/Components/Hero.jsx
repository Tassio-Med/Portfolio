import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const fadeInLeft = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const [scale, setScale] = useState(1);
  const [y, setY] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const newScale = 1 - scrollTop / 600; 
    setScale(newScale < 0.2 ? 0.2 : newScale); 
    const newY = -scrollTop / 90; 
    setY(newY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="w-full h-screen bg-neutral-900 flex justify-center items-center overflow-x-hidden" id="hero"
    >
      <div className="flex justify-center items-center w-full py-24">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInLeft}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
          style={{ scale: scale, y: y, lineHeight: 0.9 }} 
          className="text-slate-50 text-[230px] font-bold z-40"
        >
          HELLO WORLD
        </motion.h1>
      </div>
    </div>
  );
};

export default Hero;

