const ChildComp = (props:any) => {
    return (
        <>
            <h2>Child Component Rendered</h2>
            <h2>Received GodName from Props : {props.godName}</h2>
        </>
    )
}

export default ChildComp;