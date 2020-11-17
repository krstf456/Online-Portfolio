import Home1 from '../img/home1.png'
import Me from '../img/meimg.JPG'
import { About, Description, Image, Hide } from '../styles'
import { Link } from 'react-router-dom'

//framer motion

import {motion} from 'framer-motion'
import {titleAnim, fade, photoAnim} from '../animation'
import Wave from './Wave'

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
                        <motion.h2 variants={titleAnim}>My goal is to</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim} >make<span>beautiful</span></motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>websites.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact me for more information</motion.p>
                <Link to='/contact'><motion.button variants={fade} >Contact me</motion.button></Link>
            </Description>
            <Image>
                <motion.img variants={photoAnim}  src={Me} alt="cameraman"></motion.img>
            </Image>
            <Wave/>
        </About>
    )
}


export default AboutSection