import {useRef, useEffect, useState} from 'react'
import {useInView} from 'react-intersection-observer'
import {easeOut, motion} from 'framer-motion'
import './FirstSection.css'



export function FirstSection() {
  const {ref: myRef, inView: isVisible} = useInView()


  const variants = {
    elementInView : { x:"-5%", transition:{
      ease: easeOut,
      duration: 2
    }},
    notInView : { x:0}
    
  }
  const spanText = "functional beauty".split(" ");
  const textTitle = "Crystalizing".split(" ");
  const textTitleLast = "for your brand".split(" ");
  
  return (
    <div className='hero pt-5'>
        
        <motion.div animate={isVisible ? "elementInView" : "notInView"} variants={variants} className='container d-flex align-items-baseline justify-content-flex-start text-light'>
          <div className='container d-flex' >{
            textTitle.map((el, i) => (
              <motion.h1 initial={{opacity : 0}} animate={{opacity: 1}} transition={{duration: 1.5, delay: i/10}} key={i}   ref={myRef} className="my-title"  >
                  {el}{" "}
                  </motion.h1>
            ))
          }
            
            <div className='for-your d-flex'>
              {textTitleLast.map((el, i) => (
                <motion.h1 className='my-title' initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5, delay: i/10}} key={i}>
                  {el}{" "}
                  </motion.h1>
              ))}
              </div>
            <div className='bet'>{
              spanText.map((el, i) => (
                <motion.span className='title' initial={{opacity : 0}} animate={{opacity: 1}} transition={{duration: 0.25, delay: i/10}} key={i}>
                  {el}{" "}

                </motion.span>

              ))
            }</div>
            </div>
            

            <div className='grow-bussiness'>
            <motion.p initial={{y:30, opacity:0}} animate={{y:0, opacity: 1}} transition={{duration: 2}}>You grow your bussiness.</motion.p>
            <motion.p initial={{y: 5, opacity: 0}} animate={{y:0, opacity: 1}} transition={{duration: 2}}>We take care of the image.</motion.p>
            </div>
        </motion.div>
        

    </div>
  )
}

export default FirstSection