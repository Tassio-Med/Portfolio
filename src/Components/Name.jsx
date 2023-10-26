import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Name() {
  const [scale, setScale] = useState(1);
  const [y, setY] = useState(0);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const newScale = 1 - scrollTop / 2000; 
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


  const nameVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.2, type: 'tween', ease: 'easeOut' } },
  };


  return (
    <div id="about" className="w-full h-screen flex bg-neutral-900">
      <div className="w-full px-4 flex flex-start items-center justify-start overflow-x-hidden">
        <div className="flex w-full">
          <motion.h3
            className="text-7xl text-slate-50 font-bold mb-9 z-50"
            id="title"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={nameVariants}
            style={{ scale: scale, y: y, lineHeight: 1 }}
            ref={ref}
          >
            Meu nome é <br /> Tássio Medeiros :)
          </motion.h3>
        </div>
      </div>
    </div>
  );
}

export default Name;
