import Home1 from '../img/home1.png'
import { About, Description, Image, Hide } from '../styles'

//framer motion

import {motion} from 'framer-motion'

const AboutSection = () => {


    // const titleAnimation = {
    //     hidden: {opacity: 0},
    //     show: {opacity: 1, transition: {duration: 2}}
    // }
    // const container = {
    //     hidden: {x: 100},
    //     show: {x: 0, transition: {duration: 0.75, ease: "easeOut", staggerChildren: 1, when: "afterChildren"}}
    // }
    return(
        <About>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2>My goal is to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>your<span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>true.</motion.h2>
                    </Hide>
                </motion.div>
                <p>Contact me for more information</p>
                <button>Contact me</button>
            </Description>
            <Image>
                <img src={Home1} alt="cameraman"></img>
            </Image>
        </About>
    )
}


export default AboutSection