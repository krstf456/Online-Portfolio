import Home1 from '../img/home1.png'

const AboutSection = () => {
    return(
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>My goal is to make</h2>
                    </div>
                    <div className="hide">
                        <h2>your<span>dreams</span> come</h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div>
                <p>Contact me for more information</p>
                <button>Contact me</button>
            </div>
            <div className="img">
                <img src={Home1} alt="cameraman"></img>
            </div>
        </div>
    )
}

export default AboutSection