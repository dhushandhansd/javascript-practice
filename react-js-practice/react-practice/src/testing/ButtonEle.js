import React, { useState } from "react"

const ButtonEle = ({label}) => {

  const [btnText, setBtnText] = useState("")

  return(
    <div>
      <h2 testId='name-label'>{label || btnText}</h2>
      <button testId="name-button" onClick={() => setBtnText('button pressed')}>{ btnText || label}</button>
    </div>
  )
}

export default ButtonEle