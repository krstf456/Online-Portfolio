import Home1 from '../img/home1.png'
import { About, Description, Image, Hide } from '../styles'
const AboutSection = () => {
    return(
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>My goal is to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your<span>dreams</span> come</h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
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