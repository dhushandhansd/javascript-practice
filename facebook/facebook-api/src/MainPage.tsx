import { useEffect, useState } from 'react';
import Post from "./Post";
import './grid.css'
const MainPage = () => {

  const FACEBOOK_API = process.env.FACEBOOK_API
  const FIELDS = process.env.FIELDS;
  const LIMIT = process.env.LIMIT;

  const url = "https://graph.instagram.com/me/media?fields="+ FIELDS +'&access_token='+ FACEBOOK_API +'&limit='+ LIMIT

  const [media, setMedia] = useState([] as any)

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(userData => {
      if(!userData || !userData.data) {
        console.log("Line 23 - API Handshake Success")
        return
      }
      console.log("Line 26 - API Handshake Success")
      setMedia(userData.data)
    })
  }, [])

  // console.log("Line42", media)

  const _renderPost = () => {
    if(!media || media.length == 0) {
      return null
    }
    const list = media.map((post:any) => {
      return <Post image={post.media_url} caption={post.caption} key={post.id} permalink={post.permalink}/>
    })

    return list
  }

  return(
    <div className="main-container">
      <h2>Instagram API</h2>
      <div className="posts">
      {
        _renderPost()
      }
      </div>
      
    </div>
  )
}

export default MainPage