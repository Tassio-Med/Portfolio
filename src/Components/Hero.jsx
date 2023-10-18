import React from 'react';
// import Hand from '../Images/3dhand.png'


function Hero(){
  return(
    <div className="w-full h-screen bg-[#001021] flex flex-col justify-between" id="hero">
      <div className="grid md:grid-cols-2 max-w-[77.5rem] m-auto">
        <div className='flex flex-col justify-center items-center md:ml-4 md:items-start w-full px-2 py-24'>
          <h1 className='text-center text-[#5fadfc] text-7xl mb-7 font-bold md:text-start md:text-7xl'>
            Bem-vindo ao meu portfólio
          </h1>
          <h2 className='text-center  mb-3  text-slate-50 md:text-start md:text-xl'>
            Aqui você pode conhecer um pouco sobre mim e meus projetos. Fique à vontade!
          </h2>
          <p className='text-center text-lg font-thin text-slate-50 md:text-start md:text-lg'>
            Sou apaixonado por leitura e ilustração. Adoro música, basquete, artes marcias e assistir séries.
            Fiz um cafézinho, vamos conversar?
          </p>
        </div>
        <div className="flex justify-center items-center relative z-10 bottom-44 md:z-10 md:bottom-0">
          {/* <img src={Hand} alt="hand-shake" className="w-[600px] mt-10 md:w-[800px]"/> */}
        </div>
      </div>
    </div>
  )
}
export default Hero;