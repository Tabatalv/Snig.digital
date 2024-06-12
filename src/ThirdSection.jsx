
import React, {useRef} from 'react'
import Imagenes from './assets/Imagenes'
import './ThirdSection.css'
import {easeOut, motion, useMotionValueEvent, useScroll, useTransform} from 'framer-motion'

function ThirdSection() {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref
        // offset: ["start start", "end end"]
    });
    useMotionValueEvent(scrollYProgress, "change",
        (latest) => {
            console.log(latest)
        }
    )

    const color = useTransform(
        scrollYProgress, 
        [0, 0.9],
        ["white", "red"]
    )
  return (
    <div ref={ref} className='changing-color container d-flex align-items-center justify-content-around'>
        <div>
            <motion.h2 style={{color}} className='cursive'>Gots</motion.h2>
            <motion.h3 style={{color}} className='minus-cursive'>Global organic textile standard</motion.h3>
            <motion.p style={{color}} className='not-cursive'>Works behind the scenes, bringing about meaningful <br/> change from field to the certification label 
            on your <br/> favorite products</motion.p>
            <h4 className='date'>2023</h4>
            <p className='not-cursive'>· Website</p>
        </div>
        <img  src={Imagenes[0].ball}/>
    </div>
  )
}

export default ThirdSection