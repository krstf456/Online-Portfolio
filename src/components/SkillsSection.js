import clock from '../img/clock.svg'
import diagraph from '../img/diaphragm.svg'
import js from '../img/javascript.svg'
import adobe from '../img/adobecreativecloud.svg'
import css from '../img/css3.svg'
import html from '../img/html5.svg'
import react from '../img/react.svg'
import node from '../img/node-dot-js.svg'
import bill from '../img/bill.jpg'
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
                <h2><span>Frameworks</span>and<span>Languages</span></h2>
                
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={react} alt="clock"/>
                            <h3>React</h3>
                        </div>
                        <p>For Developing Applications</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={node} alt="teamwork"/>
                            <h3>NodeJS</h3>
                        </div>
                        <p>For Databases</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={js} alt="dia"/>
                            <h3>JavaScript</h3>
                        </div>
                        <p>For the funtional part of the Application</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={html} alt="money"/>
                            <h3>HTML</h3>
                        </div>
                        <p>Structuring the websites</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={css} alt="clock"/>
                            <h3>CSS:3</h3>
                        </div>
                        <p>Styling the websites</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={bill} alt="camera"/>
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