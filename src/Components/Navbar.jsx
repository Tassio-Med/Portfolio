import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-scroll";



function Nav() {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  const contentVariants = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
    },
  };

  const links = [
    {
      text: "Home",
      to: "home",
      smooth: true,
      offset: -85,
      duration: 2000,
    },
    {
      text: "Quem sou eu?",
      to: "about",
      smooth: true,
      offset: -85,
      duration: 500,
    },
    {
      text: "Meus projetos",
      to: "carousel",
      smooth: true,
      duration: 500,
    },
    {
      text: "Fale comigo",
      to: "contact",
      smooth: true,
      offset: -100,
      duration: 500,
    },
  ];

  return (
    <main className="fixed flex justify-between z-[100]">
      <motion.h1
        className="text-slate-50 absolute left-0 p-4 font-bold text-4xl z-50 cursor-pointer"
        whileHover={{ scale: 1.4 }}
      >
        <Link to="home" smooth={true} duration={1300} className="tracking-wider drop-shadow-xl">
          tm.
        </Link>
      </motion.h1>
      <AnimatePresence>
        {open && (
          <motion.aside
            variants={sideVariants}
            initial={{ width: 0 }}
            animate={{
              width: 500,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.2, duration: 0.5 },
            }}
            className="bg-slate-50 h-screen z-[80] shadow-xl"
          >
            <motion.div
              className="container mt-20 ml-16  flex items-center"
              initial="closed"
              animate="open"
              exit="closed"
              variants={contentVariants}
            >
              <ul className="text-neutral-900 w-full block items-center p-4">
                {links.map((link, index) => (
                  <li
                    key={index}
                    className="w-full text-5xl p-2 mr-6 mb-5 rounded-lg cursor-pointer hover:underline"
                  >
                    <Link
                      to={link.to}
                      smooth={link.smooth}
                      offset={link.offset || 0}
                      duration={link.duration}
                      className="font-medium"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      <div className="fixed container">
        {open ? (
          <motion.button
            whileHover={{ scale: 1.2 }}
            onClick={toggleSidebar}
            className="absolute right-0 z-50 cursor-pointer m-5 border-none py-2 px-2 bg-slate-50 rounded-full shadow-xl"
          >
            <MdClose size={24} />
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.2 }}
            onClick={toggleSidebar}
            className="absolute right-0 z-50 cursor-pointer m-5 border-none py-2 px-2 bg-slate-50 rounded-full shadow-xl"
          >
            <MdMenu size={24} />
          </motion.button>
        )}
      </div>
    </main>
  );
}

export default Nav;