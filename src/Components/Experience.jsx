import { useRef } from "react";
import { motion, useMotionTemplate, useSpring, useTransform, useScroll } from "framer-motion";
import Carousel from "./Carousel";
import "../Assets/Styles/index.css";
import Skills from "./Skills";
import SkillsTitle from "./SkillsTitles";

function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const scrollYProgressSpring = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 40,
  });
  const scale = useTransform(scrollYProgressSpring, [0, 1], [1, 12]);
  const imageX = useTransform(scrollYProgressSpring, [0, 1], [50, 0]);
  const imageXCalc = useMotionTemplate`max(0px, calc(${imageX}% + calc(${imageX}vw - 300px)))`;



  return (
    <main>
      <div ref={ref} className="relative z-10 h-[200vh] overflow-clip">
        <motion.div
          style={{ scale }}
          className="hero-background sticky left-0 top-0 grid h-screen origin-[50%_70%] gap-2 p-6 pt-12 [grid-template-rows:4fr_1fr] md:origin-[90%_40%] md:pt-20"
        >
          <div className="window-mask flex flex-col rounded-3xl bg-slate-50 p-12 md:flex-row">
            <div className="flex h-full flex-col">
              <h1 className="mb-5 max-w-[40ch] text-4xl font-bold leading-[0.85] md:my-auto md:text-[80px] xl:text-[30px]">
              Sou Desenvolvedor Full Stack e atuo como freelancer.
              <br />
              Trago comigo aprendizados de outras áreas, agora abraçando o conhecimento focado no Desenvolvimento Web.
              Perseverança e diálogo são valores que carrego e me inspiram a navegar nas águas do mundo tech, dando um up nas minhas Hard Skills e Soft Skills.
              </h1>
            </div>
            <div className="bg-neutral-900 mx-auto -mb-7 mt-4 box-content aspect-[5/8] w-[150px] min-w-[150px] rounded-full border-[4px] md:my-auto md:-mr-1 md:ml-auto md:w-[300px] md:min-w-[300px]" />

          </div>
        </motion.div>
      </div>
      <div className="mt-[-200vh] h-[200vh] overflow-clip bg-neutral-900 pb-20">
        <motion.span
          style={{ x: imageXCalc }}
          className="sticky top-1/2 mx-auto block aspect-video w-[60%] h-[40%] max-w-[90%] rounded-xl bg-slate-50 z-[1]"
        >
          <Skills/>
        </motion.span>
        <section className="w-full mt-[218px] text-slate-50">
          <SkillsTitle baseVelocity={-2}>Skills</SkillsTitle>
          <SkillsTitle baseVelocity={2}>Skills</SkillsTitle>
          <SkillsTitle baseVelocity={-2}>Skills</SkillsTitle>
          <SkillsTitle baseVelocity={2}>Skills</SkillsTitle>
        </section>
          
      </div>
      <Carousel/>
    </main>
  );
}

export default Experience;