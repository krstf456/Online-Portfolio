import styled from 'styled-components'
import { Link } from 'react-router-dom'
//images

import hstore from '../img/mainhstore.png'
import {motion} from 'framer-motion'
import {pageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer} from '../animation'
import {useScroll} from '../components/useScroll'
import ScrollTop from '../components/ScrollTop'

const MyWork = () => {
    // const [element, controls] = useScroll()
    // const [element2, controls2] = useScroll()
    return(
        <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{background: '#fff'}}>
            <motion.div variants={sliderContainer}>

            <Frame1 variants={slider}></Frame1>
            <Frame2 variants={slider}></Frame2>
            <Frame3 variants={slider}></Frame3>
            <Frame4 variants={slider}></Frame4>
            </motion.div>

            <Movie>
                <motion.h2 variants={fade}>H-Store</motion.h2>
                <motion.div variants={lineAnim} className="line">

                </motion.div>
                <Link to="/work/h-store">
                    <Hide>
                    <motion.img variants={photoAnim} src={hstore} alt="hstore picture"/>
                    </Hide>
                </Link>
            
            </Movie>
            {/* <Movie ref={element} variants={fade} animate={controls} initial="hidden">
                <motion.h2  variants={fade}></motion.h2>
                <motion.div variants={lineAnim} className="line">

                </motion.div>
                <Link to="/work/">
                    <img src={} alt=""/>
                </Link>
            
            </Movie> */}
            {/* <Movie ref={element2} variants={fade} animate={controls2} initial="hidden">
                <motion.h2 variant={fade}></motion.h2>
                <motion.div variants={lineAnim} className="line">

                </motion.div>
                <Link to="/work/">
                    <img src={} alt=""/>
                </Link>
            
            </Movie> */}
            
            <ScrollTop/>
        </Work>
    )
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    @media (max-width: 1300px){
           padding: 2rem 2rem; 
        }
    h2{
        padding: 1rem 0rem;
    }
`

const Movie = styled(motion.div)`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        
    }
`

const Hide = styled.div`
    overflow: hidden;
`
//frame animation
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`
const Frame2 = styled(Frame1)`
    background: #ff8efb;
`
const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`
const Frame4 = styled(Frame1)`
    background: #8effa0;
`


export default MyWork