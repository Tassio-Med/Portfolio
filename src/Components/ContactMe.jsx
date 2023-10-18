import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import emailjs from '@emailjs/browser';

import { SiLinkedin, SiTelegram, SiGithub, SiWhatsapp, SiGmail, SiGooglemaps } from "react-icons/si"


function ContactMe() {

  const sendEmail = (e) => {
    e.preventDefault();

    toast.success("Mensagem enviada com sucesso!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    emailjs.sendForm(
      'service_9g71ut5',
      'template_zb7jvct',
      e.target,
      '5bxncS6Df2GIHTc_3',
      )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    };
 

  return(
    <div id="contact" className="w-full h-full mt-10 block justify-center items-center md:flex md:justify-center md:items-center md:mt-28 bg-[#001021]">
      <div className='mb-10 text-slate-50 p-4 flex flex-col justify-center items-center md:flex md:justify-start md:items-start md:w-[450px] '>
        <h2 className='text-4xl font-bold text-[#5fadfc] md:text-5xl'>Fale comigo</h2>
        <p className='text-lg text-center md:text-start'>
          Me envie uma mensagem pelas redes e conecte-se comigo.
        </p>
        <br/>
        <div className='flex'>
          <a 
            href="https://www.linkedin.com/in/tassiomed98"
            target="_blank" 
            rel="noopener noreferrer"
            className='pr-6'
          >
            <SiLinkedin className='text-xl hover:scale-110 ease-in-out duration-300'/>
          </a>

          <a 
            href="https://github.com/Tassio-Med"
            target="_blank"
            rel="noopener noreferrer"
            className='pr-6'
            >
            <SiGithub className='text-xl hover:scale-110 ease-in-out duration-300' />
          </a>

          <a
            href="https://t.me/Tassio_Med"
            target="_blank"
            rel="noopener noreferrer"
            className='pr-6'
          >
            <SiTelegram className='text-xl hover:scale-110 ease-in-out duration-300'/>
          </a>


          <a 
            href="https://api.whatsapp.com/send?phone=5586999369524"
            target="_blank"
            rel="noopener noreferrer"
            className='pr-6'
            >
            <SiWhatsapp className='text-xl hover:scale-110 ease-in-out duration-300'/>
          </a>
          <a
            href="mailto:tassiohfmed@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className='pr-6'
          >
            <SiGmail className='text-xl hover:scale-110 ease-in-out duration-300'/>
          </a>

        </div>
        <div className='mt-9'>
          <a
            className='flex items-center hover:scale-110 ease-in-out duration-300'
            href="https://goo.gl/maps/GrXae3ium4mfmytE9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGooglemaps className='mr-4 text-xl'/>
            <p className='text-md font-light'>Dirceu I, Teresina-PI, Brasil</p>
          </a>
        </div>
      </div>
      <form id="contactme" method="POST" className="p-6 rounded-xl bg-slate-50 flex flex-col justify-center items-center md:w-[450px] md:mx-8 "  onSubmit={sendEmail}>
        <div className="w-full text-[#001021]">
          <label htmlFor="name">Nome</label>
          <br/>
          <input type="text" name="fullName" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#5fadfc] focus:outline-none focus:ring-0" required={true} placeholder="Nome completo"/>
        </div>
        <br/>
        <div className="w-full text-[#001021]">
          <label htmlFor="email" >Email</label>
          <br/>
          <input type="email" name="email" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#5fadfc] focus:outline-none focus:ring-0" required={true} placeholder="email.example@gmail.com" />
        </div>
        <br/>
        
        <div className="w-full text-[#001021]">
          <label htmlFor="message">Mensagem</label>
          <br/>
          <textarea className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#5fadfc] focus:outline-none focus:ring-0" name="message" rows="5" type="message" required={true}/>
        </div>
        <br/>
        <div className='w-full'>
          <button type="submit" className="bg-[#0c63ba] hover:bg-[#1c87f3]  rounded-lg w-full py-2 font-bold text-slate-50">
            Enviar
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
  )
}
export default ContactMe;