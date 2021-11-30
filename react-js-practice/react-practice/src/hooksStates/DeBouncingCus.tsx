import { useState } from 'react'
import '../Routing/routingStyles.css'
import {debounce} from 'lodash'
const DeBouncingCus = () => {


    const [typeResult, setTypeResult] = useState("Type something.")

    const _handleTyping = debounce(
        (e:any) => {
            setTypeResult(e)
        }, 3000 // Result is reflected after 3000ms
    )

    return(
        <div className="main-container">
            <h2>Debouncing Practice</h2>
            <input type="text" onChange={(e) => {_handleTyping(e.target.value)}}/>
            <h3>{typeResult}</h3>
        </div>
    )
}

export default DeBouncingCus