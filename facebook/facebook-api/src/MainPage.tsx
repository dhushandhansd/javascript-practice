import { useEffect, useState } from 'react';
import Post from "./Post";
import './grid.css'
const MainPage = () => {

  // const FACEBOOK_API = process.env.FACEBOOK_API
  // const FIELDS = process.env.FIELDS;
  // const LIMIT = process.env.LIMIT;

   const FACEBOOK_API = 'IGQVJWMk5MSUhuendHWnItWmhyYWJ3a05CcUVFNS0xZAWpIZADJyUEdqekFmekRQRF8xYVB1RV94SjE0NjZABNmF3NkFPNEVpb3h5QlpoNzRwNzlBbTQxMTk5aTlvdlRHV3I5eHNjN2hGSEh5bU90NnBSMQZDZD'
   const FIELDS = 'id,media_type,media_url,thumbnail_url,timestamp,permalink,caption';
  const LIMIT = 20;



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
      console.log(userData.data)
    })
  }, [])

  // console.log("Line42", media)

  const _renderPost = () => {
    if(!media || media.length == 0) {
      return null
    }
    const list = media.map((post:any) => {
      if(post.media_type == "VIDEO") {
        return <Post key={post.id} image={post.thumbnail_url} caption={post.caption} permalink={post.permalink} mediaType={post.media_type}/>
      }
      return <Post key={post.id} image={post.media_url} caption={post.caption} permalink={post.permalink} mediaType={post.media_type}/>
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