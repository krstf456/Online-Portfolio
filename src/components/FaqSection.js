
import { About, Description, Hide, Image } from "../styles"
import styled from 'styled-components'
import Toggle from './Toggle'
import {AnimateSharedLayout} from 'framer-motion'
import { useScroll } from './useScroll'
import { scrollReveal, fade } from '../animation'

const FaqSection = () => {
    const [element, controls] = useScroll()
    return(
        <Faq variants={fade} ref={element} animate={controls} initial="hidden">
            <h2>About Me<span>FAQ</span></h2>
            <AnimateSharedLayout>

            <Toggle title="Who are you?">

                
                    
                    <div className="answer">
                        <p>My name is Kristóf Vörösváczki.</p>
                        <p>Im coming from Hungary, but I lived in Sweden in the past 7 years.</p>
                    </div>

                
            </Toggle>
            <Toggle title="What do you do for living?">

               
                    
                    <div className="answer">
                        <p>Right now I'm a full time student at Medieinstitutet Gothenburg.</p>
                        <p>This is my second year as a Front-End Developer student. </p>
                    </div>

               
            </Toggle>
            <Toggle title="What languages do you speak?">

                
                    
                    <div className="answer">
                        <p>Hungarian is my mother language, besides that I speak fluent Swedish and English.</p>
                        
                    </div>

               
            </Toggle>
            <Toggle title="What are your hobbies?">

              
                    
                    <div className="answer">
                        <p>I like to do different sports depending on the season, such as ride mountainbike or ride snowboard. Tennis is the all season sport for me.</p>
                        <p>Beside these activities I like to travel and I'm a big animal lover.</p>
                        
                    </div>

                
            </Toggle>
        </AnimateSharedLayout>
        </Faq>
    )
}

const Faq = styled(About)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`

export default FaqSection