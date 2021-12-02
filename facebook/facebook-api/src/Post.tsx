import { useEffect, useRef } from 'react'
import './grid.css'
import play from '../assets/play.png'

const Post = (props:any) => {
  // console.log("Line2",props)

  const _handleImage = () => {
    window.open(props.permalink, "_blank")
  }

  return(
    <div className="photo-grid">
      <img onClick={_handleImage} className="postImage" src={props.image} alt={props.caption} />
      <p className="postCaption">{props.caption}</p>
      <button className='viewBtn' onClick={_handleImage}>View Now</button>
      {props.mediaType == "VIDEO" ? <img className="videoIcon" src={play} alt="videoicon" /> : null}
    </div>
  )
}

export default Post