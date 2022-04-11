import './navbarStyles.css'

const Navbar = () => {

    const _homeNav = () => {
        window.location.href = "/"
    }

    const _notesNav = () => {
        window.location.href = "/notes"
    }

    const _notebookNav = () => {
        window.location.href = "/noteBook"
    }

    return(
        <div className="navbar">
            <h3 onClick={_homeNav}>User</h3>
            <h3 onClick={_notesNav}>Notes</h3>
            <h3 onClick={_notebookNav}>Notebook</h3>
        </div>
    )
}

export default Navbar