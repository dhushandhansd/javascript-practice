import Navbar from "./Components/Navbar"
import Project from "./Components/Project"

import home from '../assets/Homepage.png'

//Styles
import './styles/projectsStyle.css'
import apple from '../assets/apple.jpg'
import netflix from '../assets/netflix.jpg'
import hotstar from '../assets/hotstar.webp'
import flipkart from '../assets/flipkart.png'
import twitter from '../assets/twitter.jpg'

import rescue from '../assets/rescue.jpg'
import mentors from '../assets/mentors.jpg'
import covid from '../assets/covid.webp'
import weather from '../assets/weather.png'


const Projects = () => {

    return(
        <div className="projects-container">
            <Navbar></Navbar>
            <div className="projects-section">
                <div className="title-container">
                    <h3>REACT PROJECTS..</h3>
                </div>
                <div className="projects-window">
                    <Project image={apple} name={"Sample Project"}/>
                    <Project image={netflix} name={"Sample Project"}/>
                    <Project image={hotstar} name={"Sample Project"}/>
                    <Project image={flipkart} name={"Sample Project"}/>
                    <Project image={twitter} name={"Sample Project"}/>
                </div>
                <div className="title-container">
                    <h3>ANDROID PROJECTS..</h3>
                </div>
                <div className="projects-window">
                    <Project image={rescue} name={"Sample Project"}/>
                    <Project image={mentors} name={"Sample Project"}/>
                    <Project image={covid} name={"Sample Project"}/>
                    <Project image={weather} name={"Sample Project"}/>
                </div>
            </div>
        </div>
    )
}

export default Projects