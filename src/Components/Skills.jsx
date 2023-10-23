import {FaReact, FaGithub, FaHtml5, FaDocker} from 'react-icons/fa';
import {DiGit, DiHeroku} from 'react-icons/di';
import {GrMysql, GrNode} from 'react-icons/gr';
import {SiRedux, SiJavascript, SiTailwindcss, SiCss3, SiJest, SiBootstrap, SiMongodb, SiTypescript} from 'react-icons/si';

function Skills(){
  return(
    <div className="bg-slate-50 flex flex-col justify-center items-center rounded-lg">
      <div className="flex justify-center items-center">
        <h2 className="text-2xl text-neutral-900 font-bold leading-normal">Minhas Skills</h2>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-slate-50 p-4 mb-3">
        <li className="mx-4 flex flex-col justify-center items-center">
          <DiGit className="text-4xl text-neutral-800 hover:scale-110 ease-in-out duration-300"/>
          <p className="text-sm text-neutral-600">Git</p>
        </li>
        <li className="mx-4 flex flex-col justify-center items-center">
          <FaGithub className="text-2xl text-neutral-800 hover:scale-110 ease-in-out duration-300"/>
          <p className="text-sm text-neutral-600">Github</p>
        </li>
        <li className="mx-4 flex flex-col justify-center items-center">
          <SiJavascript className="text-2xl text-neutral-800 hover:scale-110 ease-in-out duration-300"/>
          <p className="text-sm text-neutral-600">Javascript</p>
        </li>
        <li className="mx-4 flex flex-col justify-center items-center">
          <FaReact className="text-2xl text-neutral-800 hover:scale-110 ease-in-out duration-300"/>
          <p className="text-sm text-neutral-600">React.js</p>
        </li>
        <li className="mx-4 flex flex-col justify-center items-center">
          <FaHtml5 className="text-2xl text-neutral-800 hover:scale-110 ease-in-out duration-300"/>
          <p className="text-sm text-neutral-600">HTML5</p>
        </li>
        <li className="mx-4 flex flex-col justify-center items-center">
          <SiCss3 className="text-2xl text-neutral-800 hover:scale-110 ease-in-out duration-300"/>
          <p className="text-sm text-neutral-600">CSS3</p>
        </li>
        <li className="mx-4 flex flex-col justify-center items-center">
          <SiJest className="text-2xl text-neutral-800 hover:scale-110 ease-in-out duration-300"/>
          <p className="text-sm text-neutral-600">Jest</p>
        </li>
        <li className="mx-4 flex flex-col justify-center items-center">
          <SiRedux className="text-2xl text-neutral-800 hover:scale-110 ease-in-out duration-300"/>
          <p className="text-sm text-neutral-600">Redux</p>
        </li>
        <li className="mx-4 flex flex-col justify-center items-center">
          <SiBootstrap className="text-2xl text-neutral-800 hover:scale-110 ease-in-out duration-300"/>
          <p className="text-sm text-neutral-600">Bootstrap</p>
        </li>
        <li className="mx-4 flex flex-col justify-center items-center">
          <SiTailwindcss className="text-2xl text-neutral-800 hover:scale-110 ease-in-out duration-300"/>
          <p className="text-sm text-neutral-600">Tailwind</p>
        </li>
        <li className="mx-4 flex flex-col justify-center items-center">
          <FaDocker className="text-2xl text-neutral-800 hover:scale-110 ease-in-out duration-300"/>
          <p className="text-sm text-neutral-600">Docker</p>
        </li>
        <li className="mx-4 flex flex-col justify-center items-center">
          <GrMysql className="text-2xl text-neutral-800 hover:scale-110 ease-in-out duration-300"/>
          <p className="text-sm text-neutral-600">SQL</p>
        </li>
        <li className="mx-4 flex flex-col justify-center items-center">
          <GrNode className="text-2xl text-neutral-800 hover:scale-110 ease-in-out duration-300"/>
          <p className="text-sm text-neutral-600">Node.js</p>
        </li>
        <li className="mx-4 flex flex-col justify-center items-center">
          <DiHeroku className="text-2xl text-neutral-800 hover:scale-110 ease-in-out duration-300"/>
          <p className="text-sm text-neutral-600">Heroku</p>
        </li>
        <li className="mx-4 flex flex-col justify-center items-center">
          <SiMongodb className="text-2xl text-neutral-800 hover:scale-110 ease-in-out duration-300"/>
          <p className="text-sm text-neutral-600">MongoDB</p>
        </li>
        <li className="mx-4 flex flex-col justify-center items-center">
          <SiTypescript className="text-2xl text-neutral-800 hover:scale-110 ease-in-out duration-300"/>
          <p className="text-sm text-neutral-600">Typescript</p>
        </li>
      </ul>
    </div>
  )
}

export default Skills;