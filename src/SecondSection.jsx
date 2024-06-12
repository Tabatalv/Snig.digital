import React from 'react'
import './SecondSection.css'
import {useInView} from 'react-intersection-observer'
import {easeOut, motion} from 'framer-motion'

function SecondSection() {
  // const {ref: myRef, inView: isVisible} = useInView()
  // const variants = {
  //   sectInView : {height: "5", transition: {
  //     duration: 2
  //   }},
  //   notInView: {height: "0"}
  // }
  return (
    <div className='who-we-are text-light ms-5'>
      <div className='storytellers'>
        <motion.h5 initial={{height: "0"}} whileInView={{height: "5rem"}} transition={{duration: 3}} viewport={{once: true}} className='mb-5'>Who we are</motion.h5>
        <motion.h3 className='hidden-title' initial={{height: "0"}} whileInView={{height: "6.3rem"}} transition={{duration: 3}} viewport={{once: true}}><span>Empathetic </span> and ambitious storytellers </motion.h3>
        <motion.h3 className='hidden-title' initial={{height: "0"}} whileInView={{height: "6.3rem"}} transition={{duration: 3}} viewport={{once: true}}>commited to <span> your </span> success, while</motion.h3>
        <motion.h3 className='hidden-title' initial={{height: "0"}} whileInView={{height: "6.3rem"}} transition={{duration: 3}} viewport={{once: true}}>remaining <span>rational and fair</span></motion.h3>
      </div>
      <div className="solutions d-flex flex-column align-items-center mt-5">
        <motion.h4 className='smaller-title' initial={{height: "0"}} whileInView={{height: "5rem"}} transition={{duration: 3}} viewport={{once: true}}>We turn your goals into practical <br/> solutions</motion.h4>
      </div>
        
    </div>
  )
}

export default SecondSection