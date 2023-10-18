import React from 'react';
import { projectsData } from '../Services/data';
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { SiGithub } from 'react-icons/si';
import { CgEnter } from 'react-icons/cg';

const Example = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {projectsData.map((project) => {
            return <Card project={project} key={project.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

// const Card = ({ project }) => {
//   return (
//     <div
//       key={project.id}
//       className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 "
//     >
//       <img key={project.id} className='object-cover w-full  h-[57%]' src={project.img} alt={project.title}/>
//       <div className='m-1 w-full p-3 flex flex-col justify-between'>
//         <div className="flex justify-between p-2 leading-normal">
//           <div className='hover:underline underline-offset-2'>
//             <a href={project.link} target="_blank" rel="noopener noreferrer" className='flex justify-between'>
//               <h5 className="mr-1 text-xl font-bold tracking-tight text-gray-900">{project.title} </h5>
//               <CgEnter className="text-slate-700 text-lg"/>
//             </a>
//           </div>
//         </div>
//         <div className='flex flex-col'>
//           <div className=''>
//             <p className='text-md m-2 mb-4' >{project.skills}</p>
//           </div>
//           <button className='rounded-lg list-none flex justify-center bg-blue-500 hover:bg-blue-700 duration-700 text-slate-50'>
//             <a href={project.github} target="_blank" rel="noopener noreferrer" className='flex justify-between items-center'>
//               <p className='m-2 font-medium'>VER REPOSITÓRIO</p>
//               <SiGithub className="text-xl"/>
//             </a>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

const Card = ({ project }) => {
  return (
    <div
      key={project.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 flex flex-col justify-center items-center"
    >
      <img
        key={project.id}
        className='object-cover w-full h-[57%]'
        src={project.img}
        alt={project.title}
      />
      <div className='w-full p-3 flex flex-col items-center'>
        <div className='p-2 leading-normal'>
          <div className='hover:underline underline-offset-2'>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <h5 className="text-xl font-bold tracking-tight text-gray-900">{project.title}</h5>
              <CgEnter className="text-slate-700 text-lg"/>
            </a>
          </div>
        </div>
        <div className='text-center my-4'>
          <p className='text-md'>{project.skills}</p>
        </div>
        <div className='w-full'>
          <button className='rounded-lg list-none flex justify-center bg-blue-500 hover:bg-blue-700 duration-700 text-slate-50'>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className='flex justify-between items-center'>
              <p className='m-2 font-medium'>VER REPOSITÓRIO</p>
              <SiGithub className="text-xl"/>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};




export default Example;

// const cards = [
//   {
//     url: "/imgs/abstract/1.jpg",
//     title: "Title 1",
//     id: 1,
//   },
//   {
//     url: "/imgs/abstract/2.jpg",
//     title: "Title 2",
//     id: 2,
//   },
//   {
//     url: "/imgs/abstract/3.jpg",
//     title: "Title 3",
//     id: 3,
//   },
//   {
//     url: "/imgs/abstract/4.jpg",
//     title: "Title 4",
//     id: 4,
//   },
//   {
//     url: "/imgs/abstract/5.jpg",
//     title: "Title 5",
//     id: 5,
//   },
//   {
//     url: "/imgs/abstract/6.jpg",
//     title: "Title 6",
//     id: 6,
//   },
//   {
//     url: "/imgs/abstract/7.jpg",
//     title: "Title 7",
//     id: 7,
//   },
// ];