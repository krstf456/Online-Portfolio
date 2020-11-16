import Home1 from '../img/home1.png'
import { About, Description, Image, Hide } from '../styles'

//framer motion

import {motion} from 'framer-motion'
import {titleAnim, fade, photoAnim} from '../animation'

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
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim}>My goal is to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim} >your<span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact me for more information</motion.p>
                <motion.button variants={fade}>Contact me</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={Home1} alt="cameraman"></motion.img>
            </Image>
        </About>
    )
}


export default AboutSection