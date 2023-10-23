import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex justify-around items-center h-screen">
      <div className="flex justify-around items-center w-[30%] h-screen">
        <motion.div
          className="w-10 h-10 bg-slate-50 rounded-full"
          initial={{ y: 0 }}
          animate={{ y: [-30, 30, -30] }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            delay: 0.8,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="w-10 h-10 bg-slate-50 rounded-full"
          initial={{ y: 0 }}
          animate={{ y: [-30, 30, -30] }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            delay: 1,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="w-10 h-10 bg-slate-50 rounded-full"
          initial={{ y: 0 }}
          animate={{ y: [-30, 30, -30] }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            delay: 1.2,
            ease: "easeInOut",
          }}
        ></motion.div>
      </div>
    </div>
  );
};

export default Loader;
