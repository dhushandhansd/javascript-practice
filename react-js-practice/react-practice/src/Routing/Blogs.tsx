import { Link } from "react-router-dom"

const Blogs = () => {
    return(
        <>
            <div className="blogs-container">
                <h2>Blogs</h2>
                <Link to="/"><button>Home</button></Link>
            </div>
        
        </>
    )
}

export default Blogs