import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <div className="navbar-container">
            <div className="navbar">
                <div className="navbar-brand">
                    <h2>UKSD</h2>
                </div>
                <ul className="navbar-list">
                    <Link to="/">
                        <li className="navbar-item">
                            HOME
                        </li>
                    </Link>
                    <Link to="/projects">
                        <li className="navbar-item">
                            PROJECTS
                        </li>
                    </Link>
                    <Link to="/aboutme">
                        <li className="navbar-item">
                            ABOUT ME
                        </li>
                    </Link>
                </ul>
            </div>
            
        </div>
    )
}

export default Navbar