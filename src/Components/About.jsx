import Image from '../Assets/Images/profile.png';

import Skills from '../Components/Skills';

import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si'

function About(){
  return(
    <div id='about' className='w-full h-full block justify-center items-center md:flex md:justify-center md:items-center bg-[#001021]'>
      <div className="flex justify-center items-center">
        <div className="relative max-w-md mx-auto md:max-w-xl min-w-0 break-words bg-white w-full shadow-lg rounded-xl">
            <div className="px-6">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full flex justify-center">
                        <div className="relative">
                            <img src={ Image } alt="tassio" className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px] hover:scale-110 ease-in-out duration-300"/>
                        </div>
                    </div>
                    <div className="w-full text-center mt-20">
                        <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                            <div className="p-3 text-center">
                                <a href="https://github.com/Tassio-Med" target="_blank" rel="noopener noreferrer">
                                  <span className="text-xl font-bold flex justify-center items-center uppercase tracking-wide text-slate-700 hover:scale-110 ease-in-out duration-300"><SiGithub className='text-2xl'/></span>
                                  <span className="text-sm text-slate-400">Github</span>
                                </a>
                            </div>
                            <div className="p-3 text-center">
                                <a href="https://www.instagram.com/tassio.med/" target="_blank" rel="noopener noreferrer">
                                  <span className="text-xl font-bold flex justify-center items-center uppercase tracking-wide text-slate-700 hover:scale-110 ease-in-out duration-300"><SiInstagram className='text-2xl'/></span>
                                  <span className="text-sm text-slate-400">Instagram</span>
                                </a>
                            </div>
                            <div className="p-3 text-center">
                                <a href="https://www.linkedin.com/in/tassiomed98" target="_blank" rel="noopener noreferrer">
                                  <span className="text-xl font-bold flex justify-center items-center uppercase tracking-wide text-slate-700 hover:scale-110 ease-in-out duration-300"><SiLinkedin className='text-2xl'/></span>
                                  <span className="text-sm text-slate-400">Linkedin</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-2">
                    <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">Tássio Medeiros</h3>
                    <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                        <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75">Teresina-PI, Brasil</i>
                    </div>
                </div>
                <div className="mt-6 py-6 border-t border-slate-200 text-center">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full px-4">
                            <p className="font-light leading-relaxed text-slate-600 mb-4">Sou Desenvolvedor Full Stack e atuo como freelancer. Trago comigo aprendizados de outras áreas, agora abraçando o conhecimento focado no Desenvolvimento Web. Perseverança e diálogo são valores que carrego e me inspiram a navegar nas águas do mundo tech, dando um up nas minhas Hard Skills e Soft Skills</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Skills/>
    </div>
  )
}

export default About;