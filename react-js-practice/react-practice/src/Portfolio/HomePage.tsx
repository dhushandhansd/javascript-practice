import './styles/mainStyle.css'
import Navbar from './Components/Navbar'

//Images
import Shree from '../assets/Shree.png'
import WavingHand from '../assets/waving-hand.png'

const HomePage = () => {
    return(
        <div className="main-container">
            <Navbar/>
            <div className="body-container">
                <div className="text-container">
                    <div className="name-container">
                        <div className="emoji-section">
                            <img src={WavingHand} alt="wavingHand" />
                        </div>
                        <div className="hello-section">
                            <h2>Hello from Shree Dhushandhan</h2>
                        </div>
                    </div>
                    <div className="skills-container">
                        <h3>React JS</h3>
                        <h3>Android</h3>
                    </div>
                </div>
                <div className="image-container">
                    <img src={Shree} alt="ShreeImage" />
                    {/* <h5>© UKSD</h5>
                        <h5>All Rights Reserved</h5> */}
                </div>
            </div>
        </div>
    )
}

export default HomePage