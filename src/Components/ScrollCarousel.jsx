import { projectsData } from '../Services/data';
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef} from "react";
import { SiGithub } from 'react-icons/si';
import { CgEnter } from 'react-icons/cg';

const HorizontalScrollCarousel = () => {
  

  const targetRef = useRef(null);
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: targetRef,
  });

  const x2 = useTransform(scrollYProgress2, [0, 1], ["1%", "-67%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[200vh]"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x: x2 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
          className="flex gap-4"
        >
          {projectsData.map((project) => {
            return <Card project={project} key={project.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};



const Card = ({ project }) => {

  return (
    <div
      key={project.id}
      className="group relative h-[450px] w-[450px] overflow-hidden text-slate-50 bg-neutral-900 flex flex-col justify-center items-center border border-opacity-5 rounded-lg"
    >
      <img
        key={project.id}
        className='object-cover w-[90%] h-[47%] rounded-lg m-5'
        src={project.img}
        alt={project.title}
      />
      <div className='w-full p-3 flex flex-col items-center'>
        <div className='p-2 leading-normal'>
          <div className='hover:underline underline-offset-2 flex items-center'>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <h5 className="text-xl font-bold tracking-tight mr-1">{project.title}</h5>
              <CgEnter className="text-lg"/>
            </a>
          </div>
        </div>
        <div className='text-center my-4'>
          <p className='text-md'>{project.skills}</p>
        </div>
        <div className='w-full flex flex-col items-center rounded-lg border border-slate-50 hover:bg-slate-50 duration-700 text-slate-50  hover:text-neutral-900'>
          <button className='list-none flex justify-center '>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className='flex justify-between items-center m-2'>
              <p className='mr-2 font-medium'>VER REPOSITÓRIO</p>
              <SiGithub className="text-xl"/>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel