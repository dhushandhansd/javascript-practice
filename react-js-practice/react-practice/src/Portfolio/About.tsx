import Navbar from "./Components/Navbar"
import AboutComp from "./Components/AboutComp"
import './styles/aboutme.css'
const About = () => {
    return(
        <div className="about-container">
            <Navbar/>
            <div className="text-container">
                <AboutComp/>
            </div>
        </div>
    ) 
}

export default About