import styles from '../Assets/Styles/page.module.scss';
import { useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from './useMousePosition';

export default function Hero() {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className={styles.main}>
      <motion.div 
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - (size/1.5)}px ${y - (size/1.5)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
      >
          <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}} className='text-4xl'>
            Meu nome é Tássio Medeiros :)<br/>
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