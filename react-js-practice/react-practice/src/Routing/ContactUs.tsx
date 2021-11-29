import { Link } from "react-router-dom"

const ContactUs = () => {
    return(
        <>
            <div className="contact-container">
                <h2>Contact Us</h2>
                <Link to="/"><button>Home</button></Link>
            </div>
        </>
    )
}

export default ContactUs