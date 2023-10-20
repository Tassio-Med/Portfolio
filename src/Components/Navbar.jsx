import { useState} from 'react';
import { motion } from 'framer-motion';

import { Link } from 'react-scroll'
import { HiMenu } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';

function Nav(){
  const [navbar, setNavbar] = useState(false);
  const handleClick = () => setNavbar(!navbar);

  const handleClose = () => setNavbar(!navbar);

  return(
    <nav className="w-screen z-30 bg-neutral-900 fixed">

      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center w-screen sm:mx-6">
          <motion.h1
            className="p-4 mr-4 font-bold text-2xl tm tm:hover md:text-3xl"
              initial={{ opacity: 1, x: -500 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, delay: 0.5 }}
          >
            <Link to="hero" smooth={true} duration={500} className="tracking-wider">tm.</Link>
          </motion.h1>
          <ul className="hidden text-slate-100 w-full justify-end md:flex">
            <motion.li
              className="p-2 mr-6 rounded-lg  cursor-pointer hover:underline"
              initial={{ opacity: 1, x: 500 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <Link to="carousel" smooth={true} duration={500} className="font-medium">Meus projetos</Link>
            </motion.li>
            <motion.li
              className="p-2 mr-6 rounded-lg  cursor-pointer hover:underline"
              initial={{ opacity: 1, x: 500 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, delay: 0.7 }}  
            >
              <Link to="about" smooth={true} offset={-10} duration={500} className="font-medium">Quem sou eu?</Link>
            </motion.li>
            <motion.li
              className="p-2 mr-4 rounded-lg  cursor-pointer hover:underline"
              initial={{ opacity: 1, x: 500 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, delay: 0.9 }}
            >
              <Link to="contact" smooth={true} offset={-100} duration={500} className="font-medium">Fale comigo</Link>
            </motion.li>
          </ul>
        </div>

        <div className="text-slate-50 md:hidden mr-4" onClick={handleClick}>
          {!navbar ? <HiMenu className="text-xl cursor-pointer" /> : <MdClose className="text-2xl text-slate-50 cursor-pointer" />}
        </div>
      </div>

      <ul className={!navbar ? "hidden" : "absolute bg-[#001933] w-full px-8 text-slate-50"}>
        <li className="p-2 mb-3 rounded-lg list-none">
          <Link to="carousel" smooth={true} duration={500} onClick={handleClose} className="cursor-pointer">Meus projetos</Link>
        </li>
        <li className="p-2 mb-3 rounded-lg list-none">
          <Link to="about" smooth={true} offset={-200} duration={500} onClick={handleClose} className="cursor-pointer">Quem sou eu?</Link>
        </li>
        <li className="p-2 mb-3 rounded-lg list-none">
          <Link to="contact" smooth={true} offset={-100} duration={500} onClick={handleClose} className="cursor-pointer">Fale comigo</Link>
        </li>
      </ul>
    </nav>

  )
}

export default Nav;
