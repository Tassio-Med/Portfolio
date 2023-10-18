import { useState} from 'react';

import { Link } from 'react-scroll'
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import { HiMenu } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';

function Nav(){
  const [navbar, setNavbar] = useState(false);
  const handleClick = () => setNavbar(!navbar);

  const handleClose = () => setNavbar(!navbar);

  return(
    <nav className="w-screen h-20 z-30 bg-[#001933] fixed shadow-xl">

      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center w-screen sm:mx-6">
          <h1 className="p-4 mr-4 font-bold text-2xl tm tm:hover md:text-3xl">
            <Link to="hero" smooth={true} duration={500} className="tracking-wider">tm.</Link>
          </h1>
          <ul className="hidden text-slate-100 w-full justify-end md:flex">
            <li className="p-2 mr-6 rounded-lg list-none transition- hover:bg-blue-700 duration-700 cursor-pointer">
              <Link to="carousel" smooth={true} duration={500} className="font-medium">Meus projetos</Link>
            </li>
            <li className="p-2 mr-6 rounded-lg list-none hover:bg-blue-700 duration-700 cursor-pointer">
              <Link to="about" smooth={true} offset={-200} duration={500} className="font-medium">Quem sou eu?</Link>
            </li>
            <li className="p-2 mr-4 rounded-lg list-none hover:bg-blue-700 duration-700 cursor-pointer">
              <Link to="contact" smooth={true} offset={-100} duration={500} className="font-medium">Fale comigo</Link>
            </li>
          </ul>
        </div>

        <div className="text-slate-50 md:hidden mr-4" onClick={handleClick}>
          {!navbar ? <HiMenu className="text-xl cursor-pointer" /> : <MdClose className="text-2xl text-slate-50 cursor-pointer" />}
        </div>
      </div>

      <ul className={!navbar ? "hidden" : "absolute bg-[#001933] w-full px-8 text-slate-50"}>
        <li className="p-2 mb-3 rounded-lg list-none transition- hover:bg-blue-700 duration-700">
          <Link to="carousel" smooth={true} duration={500} onClick={handleClose} className="cursor-pointer">Meus projetos</Link>
        </li>
        <li className="p-2 mb-3 rounded-lg list-none hover:bg-blue-700 duration-700">
          <Link to="about" smooth={true} offset={-200} duration={500} onClick={handleClose} className="cursor-pointer">Quem sou eu?</Link>
        </li>
        <li className="p-2 mb-3 rounded-lg list-none hover:bg-blue-700 duration-700">
          <Link to="contact" smooth={true} offset={-100} duration={500} onClick={handleClose} className="cursor-pointer">Fale comigo</Link>
        </li>
      </ul>
    </nav>

  )
}

export default Nav;