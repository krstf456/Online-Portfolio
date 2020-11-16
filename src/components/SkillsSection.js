import clock from '../img/clock.svg'
import diagraph from '../img/diaphragm.svg'
import js from '../img/javascript.svg'
import adobe from '../img/adobecreativecloud.svg'
import teamwork from '../img/teamwork.svg'
import react from '../img/react.svg'
import node from '../img/node-dot-js.svg'
import Home2 from '../img/home2.png'
import styled from 'styled-components'
//styles
import { About, Description, Hide, Image } from "../styles"
import {fade, scrollReveal} from '../animation'
import {useScroll} from './useScroll'

const SkillsSection = () => {
    const[element, controls] = useScroll()
    return(
        <Services variants={fade} animate={controls} initial="hidden" ref={element}>
            <Description>
                <h2>Few<span>skills</span>of mine</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={react} alt="clock"/>
                            <h3>React</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={node} alt="teamwork"/>
                            <h3>NodeJS</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={js} alt="dia" style={{color: 'red'}}/>
                            <h3>JavaScript</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={adobe} alt="money"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={Home2} alt="camera"/>
            </Image>
        </Services>
    )
}



const Services = styled(About)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 70%;
        padding-top: 2rem 0rem 4rem 0rem;
    }
    
`
const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1300px){
            justify-content: center;
        }
`
const Card = styled.div`
    flex-basis: 20rem;
    .icon{
        display: flex;
        align-items: center;
    }
    h3{
        margin-left: 1rem;
        background: white;
        color: black;
        padding: 1rem;
    }
`


export default SkillsSection