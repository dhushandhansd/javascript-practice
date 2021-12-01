import './grid.css'

const Post = (props:any) => {
  console.log("Line2",props)
  return(
    <div className="photo-grid">
      <img className="postImage" src={props.image} alt={props.caption} />
      <p className="postCaption">{props.caption}</p>
    </div>
  )
}

export default Post