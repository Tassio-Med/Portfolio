import {FaReact, FaGithub, FaHtml5, FaDocker} from 'react-icons/fa';
import {DiGit, DiHeroku} from 'react-icons/di';
import {GrMysql, GrNode} from 'react-icons/gr';
import {SiRedux, SiJavascript, SiTailwindcss, SiCss3, SiJest, SiBootstrap, SiMongodb, SiTypescript, SiNextdotjs, SiReactrouter, SiTestinglibrary, SiFirebase, SiStyledcomponents, SiMui, SiFramer, SiNetlify, SiVercel } from 'react-icons/si';

function Skills(){
  return(
    <div className="w-full h-[80%] bg-slate-50 flex flex-col justify-center items-center rounded-lg p-4">
      <ul className="w-full grid grid-cols-2 md:grid-cols-6 gap-7">
        <li className="flex flex-col justify-center items-center">
          <DiGit  className="text-2xl"/>
          <p className="text-sm ">Git</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <FaGithub className="text-2xl text-neutral-800"/>
          <p className="text-sm text-neutral-600">Github</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <SiJavascript className="text-2xl text-neutral-800"/>
          <p className="text-sm text-neutral-600">Javascript</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <FaReact className="text-2xl text-neutral-800"/>
          <p className="text-sm text-neutral-600">React.js</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <SiReactrouter className="text-2xl text-neutral-800"/>
          <p className="text-sm text-neutral-600">React Router</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <SiTestinglibrary className="text-2xl text-neutral-800"/>
          <p className="text-sm text-neutral-600">Testing Library</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <FaHtml5 className="text-2xl text-neutral-800"/>
          <p className="text-sm text-neutral-600">HTML5</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <SiCss3 className="text-2xl text-neutral-800"/>
          <p className="text-sm text-neutral-600">CSS3</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <SiJest className="text-2xl text-neutral-800"/>
          <p className="text-sm text-neutral-600">Jest</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <SiRedux className="text-2xl text-neutral-800"/>
          <p className="text-sm text-neutral-600">Redux</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <SiBootstrap className="text-2xl text-neutral-800"/>
          <p className="text-sm text-neutral-600">Bootstrap</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <SiTailwindcss className="text-2xl text-neutral-800"/>
          <p className="text-sm text-neutral-600">Tailwind</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <SiMui className="text-2xl text-neutral-800"/>
          <p className="text-sm text-neutral-600">Material UI</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <SiFramer className="text-2xl text-neutral-800"/>
          <p className="text-sm text-neutral-600">SiFramer</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <FaDocker className="text-2xl text-neutral-800"/>
          <p className="text-sm text-neutral-600">Docker</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <GrMysql className="text-2xl text-neutral-800"/>
          <p className="text-sm text-neutral-600">MySQL</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <SiFirebase className="text-2xl text-neutral-800"/>
          <p className="text-sm text-neutral-600">Firebase</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <GrNode className="text-2xl text-neutral-800"/>
          <p className="text-sm text-neutral-600">Node.js</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <DiHeroku className="text-2xl text-neutral-800"/>
          <p className="text-sm text-neutral-600">Heroku</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <SiNetlify className="text-2xl text-neutral-800"/>
          <p className="text-sm text-neutral-600">Netlify</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <SiVercel className="text-2xl text-neutral-800"/>
          <p className="text-sm text-neutral-600">Vercel</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <SiMongodb className="text-2xl text-neutral-800"/>
          <p className="text-sm text-neutral-600">MongoDB</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <SiTypescript className="text-2xl text-neutral-800"/>
          <p className="text-sm text-neutral-600">Typescript</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <SiNextdotjs className="text-2xl text-neutral-800"/>
          <p className="text-sm text-neutral-600">Next.js</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <SiStyledcomponents className="text-2xl text-neutral-800"/>
          <p className="text-sm text-neutral-600 ">Styled-Componentes</p>
        </li>
      </ul>
    </div>
  )
}

export default Skills;