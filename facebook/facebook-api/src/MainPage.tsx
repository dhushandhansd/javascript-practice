import { useEffect, useState } from 'react';
import Post from "./Post";

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
        return
      }
      setMedia(userData.data)
    })
  }, [])

  console.log("Line42", media)

  const _renderPost = () => {
    if(!media || media.length == 0) {
      return null
    }
    const list = media.map((val:any) => {
      return <Post image={val.media_url} caption={val.caption} key={val.id}/>
    })

    return list
  }

  return(
    <div>
      <h2>Instagram Test API</h2>
      <div id="instagram-feed1" className="instagram_feed"></div>
      {
        _renderPost()
      }
      
    </div>
  )
}

export default MainPage