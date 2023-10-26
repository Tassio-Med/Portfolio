import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SiLinkedin, SiTelegram, SiGithub, SiWhatsapp, SiGmail } from "react-icons/si"

function ContactMe() {
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
      id="contact"
      className="overflow-hidden w-full screen mt-10 block justify-center items-center md:flex md:justify-center md:items-center md:mt-28 bg-neutral-900"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
      }}
    >
      <div className='mb-10 text-slate-50 p-4 flex flex-col justify-center items-center'>
        <h2 id="title" className='text-8xl font-bold mb-5 text-slate-50'>Fale comigo</h2>
        <p id="subtitle" className='text-xl text-center md:text-start'>
          Me envie uma mensagem pelas redes e conecte-se comigo.
        </p>
        <br/>
        <motion.div
          id="icons"
          className='w-[70%] flex justify-around py-2 px-5 rounded-lg'
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
          }}
          >
          <a 
            href="https://www.linkedin.com/in/tassiomed98"
            target="_blank" 
            rel="noopener noreferrer"
            className='pr-6'
          >
            <SiLinkedin className='text-2xl hover:scale-110 ease-in-out duration-300'/>
          </a>

          <a 
            href="https://github.com/Tassio-Med"
            target="_blank"
            rel="noopener noreferrer"
            className='pr-6'
            >
            <SiGithub className='text-2xl hover:scale-110 ease-in-out duration-300' />
          </a>

          <a
            href="https://t.me/Tassio_Med"
            target="_blank"
            rel="noopener noreferrer"
            className='pr-6'
          >
            <SiTelegram className='text-2xl hover:scale-110 ease-in-out duration-300'/>
          </a>


          <a 
            href="https://api.whatsapp.com/send?phone=5586999369524"
            target="_blank"
            rel="noopener noreferrer"
            className='pr-6'
            >
            <SiWhatsapp className='text-2xl hover:scale-110 ease-in-out duration-300'/>
          </a>
          <a
            href="mailto:tassiohfmed@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGmail className='text-2xl hover:scale-110 ease-in-out duration-300'/>
          </a>
        </motion.div>
      </div>

    </motion.div>
  );
}

export default ContactMe;
