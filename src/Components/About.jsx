import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  const [showH3, setShowH3] = useState(true);
  const [isSliding, setIsSliding] = useState(false);
  const [scrollEnabled, setScrollEnabled] = useState(true); 

  const [scale, setScale] = useState(2);
  const [y, setY] = useState(0);

  const handleScrollZoom = () => {
    const scrollTop = window.scrollY;
    const newScale = 1 - scrollTop / 3000;
    setScale(newScale < 0.2 ? 0.2 : newScale);
    const newY = -scrollTop / 90;
    setY(newY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollZoom);
    return () => {
      window.removeEventListener('scroll', handleScrollZoom);
    };
  }, []);

  const handleScroll = () => {
    if (inView) {
      const scrollPosition = window.scrollY;
      const element = document.getElementById("about");
      const elementHeight = element.getBoundingClientRect().height;
      const windowHeight = window.innerHeight;

      // if (
      //   scrollPosition + windowHeight / 2 >=
      //   element.offsetTop + elementHeight / 2 &&
      //   scrollPosition - windowHeight / 2 <=
      //   element.offsetTop + elementHeight / 2
      // ) {
      //   setShowH3(true);
      // } else {
      //   setShowH3(false);
      // }
      if (
        scrollPosition + windowHeight / 2 >=
          element.offsetTop + elementHeight / 2 - 100 &&
        scrollPosition - windowHeight / 2 <=
          element.offsetTop + elementHeight / 2 - 100
      ) {
        setShowH3(true);
      } else {
        setShowH3(false);
      }
    }
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [inView]);

  const handleTextSlide = () => {
    setIsSliding(true);
    setTimeout(() => {
      setIsSliding(false);
      setScrollEnabled(true); 
    }, 700); 
  };

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => {
        setShowH3(true);
        handleTextSlide(); 
        setScrollEnabled(false); 
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [inView]);

  const handleScrollInsideComponent = (e) => {
    if (isSliding && !scrollEnabled) {
      e.preventDefault(); 
    }
  };

  return (
    <div
      id="about"
      className="w-full h-screen flex bg-neutral-900"
      onWheel={handleScrollInsideComponent}
    >
      <div className="w-full px-4 flex flex-start items-center justify-start">
        <div className="flex w-full" ref={ref}>
          <motion.h3
            className="text-[90px] text-slate-50 font-bold mb-9"
            initial={{ x: 0, opacity: 1 }}
            animate={{ x: showH3 ? -800 : 0, opacity: showH3 ? 0 : 1 }}
            transition={{ duration: 0.5 }}
            style={{ scale: scale, y: y, lineHeight: 0.9 }}
            id="title"
          >
            Meu nome é <br/> Tássio Medeiros :)
          </motion.h3>
          <motion.p
            className="w-[80%] text-4xl font-bold text-left leading-relaxed text-slate-50 mb-4 z-50"
            initial={{ x: showH3 ? -600 : 0, opacity: 1 }} 
            animate={{ x: showH3 ? -600 : 0, opacity: showH3 ? 1 : 0 }} 
            transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
            style={{ scale: scale, y: y, lineHeight: 0.9 }}
            id="text"
          >
            Sou Desenvolvedor Full Stack e atuo como freelancer.
            <br />
            Trago comigo aprendizados de outras áreas, agora abraçando o conhecimento focado no Desenvolvimento Web.
            <br />
            Perseverança e diálogo são valores que carrego e me inspiram a navegar nas águas do mundo tech, dando um up nas minhas Hard Skills e Soft Skills
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default About;





