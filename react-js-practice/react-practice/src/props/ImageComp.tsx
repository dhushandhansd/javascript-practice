const ImageComp = (props:any) => {
    return(
        <div style={{margin:'10px'}}>
            <div style={{padding : '20px', border:'..5px black solid'}}>
                <img style={{width:300, height:200}} src={props.image} alt={props.alt} />
            </div>
        </div>
    )
}

export default ImageComp;