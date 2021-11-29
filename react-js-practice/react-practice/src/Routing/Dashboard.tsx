import { Link } from "react-router-dom"
import "./routingStyles.css"

const Dashboard = () => {
    return(
        <>
            <div className="main-container">
                <h2>Welcome to Dashboard</h2>
                <div className="btns-container">
                    <Link to="/blogs"><button>Blogs</button></Link>
                    <Link to="/contact"><button>Contact Us</button></Link>
                </div>
            </div>
            
        </>
    )
}

export default Dashboard