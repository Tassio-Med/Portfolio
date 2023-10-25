import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Loader from "./Components/Loader";
import Nav from "./Components/Navbar";
import Hero from "./Components/Hero";
import Name from "./Components/Name";
import Experience from "./Components/Experience";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4500);
  }, []);

  return (
    <div className="bg-neutral-900">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Nav />
          <Hero />
          <Name />
          <Experience />
          <ContactMe />
          <Footer />
          <motion.div
            className="w-full h-2 bg-slate-50 fixed top-0 left-0 origin-left z-50"
            style={{ scaleX: scrollYProgress }}
          />
        </>
      )}
    </div>
  );
}

export default App;


