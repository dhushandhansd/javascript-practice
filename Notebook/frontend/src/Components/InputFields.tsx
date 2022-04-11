import '../AppS.css';

const InputFields = ({placeholder, Action}) => {
    return(
        <input onChange={(e) => Action(e)} className="updateInput" type="text" placeholder={placeholder}/>
    )
}

export default InputFields