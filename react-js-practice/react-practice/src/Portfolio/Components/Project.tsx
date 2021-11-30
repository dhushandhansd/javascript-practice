import '../styles/project.css'

const Project = (props:any) => {
    return(
        <div className="project-frame">
            <img src={props.image} alt={props.name} />
            {/* <p>{props.name}</p> */}
        </div>
    )
}
export default Project