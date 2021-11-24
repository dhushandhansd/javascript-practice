import { useState } from "react";

import ChildComp from "./ChildComp";

const ParentComponent = () => {
    const [GodName, setGodName] = useState("UKSD");

    return (
        <>
            <input type="text" placeholder="enter Username" onChange={(val) => {setGodName(val.target.value)}}/>
            <h1>Parent Component Rendered</h1>
            <ChildComp godName={GodName}/>
        </>
    )

}

export default ParentComponent;