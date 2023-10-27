import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Loader from "./Components/Loader";
import Nav from "./Components/Navbar";
import Hero from "./Components/Hero";
import Experience from "./Components/Experience";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import MobileWarning from "./Components/MobileWarning";
import Lenis from '@studio-freight/lenis'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showMobileWarning, setShowMobileWarning] = useState(false); 
  
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4500);

    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf);

    if (window.innerWidth < 768) {
      setShowMobileWarning(true);
    }

  }, []);

  const closeMobileWarning = () => {
    setShowMobileWarning(false);
  };

  return (
    <div className="bg-neutral-900">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Nav />
          <Hero />
          <Experience />
          <ContactMe />
          <Footer />
          <motion.div
            className="w-full h-[6px] bg-slate-100 fixed top-0 left-0 origin-left z-[100]"
            style={{ scaleX: scrollYProgress }}
          />
        </>
      )}

      {showMobileWarning && <MobileWarning onClose={closeMobileWarning} />}
    </div>
  );
}

export default App;


