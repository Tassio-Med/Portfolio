import styles from '../Assets/Styles/page.module.scss';
import { useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from './useMousePosition';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 450 : 40;


  return (
    <main className={styles.main} id="home">
      <motion.div 
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - (size/1.5)}px ${y - (size/1.5)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.8}}
      >
          <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}} className='text-6xl'>
            Meu nome é <span className="text-[#7575eb]">Tássio Medeiros :)</span><br/>
            É um prazer te ver por aqui.
          </p>
      </motion.div>

      <div className={styles.body}>
        <p><span>Hello World.</span>
        <br/>Navegue com apreciação</p>
      </div>

    </main>
  )
}