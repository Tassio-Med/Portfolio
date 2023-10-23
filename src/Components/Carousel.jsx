import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HorizontalScrollCarousel from "./ScrollCarousel";



const Carousel = () => {

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="bg-neutral-900 -z-50"
      id="carousel"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 300 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
      }}
    >
        <HorizontalScrollCarousel />
    </motion.div>
  );
};

export default Carousel;


