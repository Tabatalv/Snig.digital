
import React, {useRef} from 'react'
import Imagenes from './assets/Imagenes'
import './ThirdSection.css'
import {easeOut, motion, useMotionValueEvent, useScroll, useTransform} from 'framer-motion'
import {useState} from 'react'
import ChangingSection from './ChangingSection'

function ThirdSection() {
    // const ref = useRef(null);
    const {scrollYProgress} = useScroll() 
    const [changeBackground, setBackground] = useState(false)
    const [cont, setCont] = useState(null)
    
    // ({
    //     target: ref
    //     // offset: ["start start", "end end"]
    // });
    useMotionValueEvent(scrollYProgress, "change",
        (latest) => {
            console.log(latest)
            if(latest > 0.80 && latest < 0.83){
            setBackground(true)
            setCont(0)
            
        }
        else if(latest > 0.83 && latest < 0.86){
                setBackground(true);
                setCont(cont + 1)
        }
        else if(latest > 0.86){
            setBackground(true);
                setCont(cont + 1)
        }
        // else{
        //     setBackground(false)
        // }
        }
        
    )

    // const color = useTransform(
    //     scrollYProgress, 
    //     [0, 0.6],
    //     setBackground ? "red": "blue"
    // )
  return (
    <div>
        {changeBackground ? (
            
            <div style={{backgroundColor: "#A0DCEE"}} className='changing-color container d-flex align-items-center justify-content-around'>
                {console.log(ChangingSection[cont].h2)}
                <div>
                    <h2  className='cursive'>{ChangingSection[cont].h2}</h2>
                    <h3 className='minus-cursive'>{ChangingSection[cont].h3}</h3>
                    <p className='not-cursive'>{ChangingSection[cont].p}</p>
                    <h4 className='date'>{ChangingSection[cont].h4}</h4>
                    <p className='not-cursive'>{ChangingSection[cont].secondP}</p>
                    </div>
                    <img  src={Imagenes[0].ball}/>
                    </div>
   
        ): (
            <div className='changing-color container d-flex align-items-center justify-content-around'>
                <div>
                    <h2  className='cursive'>Gots</h2>
                    <h3 className='minus-cursive'>Global organic textile standard</h3>
                    <p className='not-cursive'>Works behind the scenes, bringing about meaningful <br/> change from field to the certification label 
                    on your <br/> favorite products</p>
                    <h4 className='date'>2023</h4>
                    <p className='not-cursive'>· Website</p>
                    </div>
                    <img  src={Imagenes[0].ball}/>
                    </div>

        )
        }
        
    </div>
  ) 
}

export default ThirdSection