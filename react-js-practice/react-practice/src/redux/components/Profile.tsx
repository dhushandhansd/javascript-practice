import { useState } from "react"
import { useSelector } from "react-redux"

const Profile = () => {

    const {stocks} = useSelector((state:any) => {
        return state.RootReducer
    })

    const [userName, setUserName] = useState("Shree Dhushandhan")

    return(
        <div>
            <h1>User Name : {userName}</h1>
            <h2>Stocks Owned : {stocks}</h2>
        </div>
    )
}

export default Profile