import { useCallback, useEffect, useMemo, useState } from "react"
import List from "./List"
const CusHooks = () => {

    const theme = false

    const [people, setPeople] = useState()

    const [startNumber, setStartNumber] = useState(123)

    const [dark, setDark] = useState(theme)

    const themeStyle = useMemo(() => {
        return{
            backgroundColor : dark ? 'black' : 'white',
            color : dark ? 'white' : 'black'
        }
    }, [dark])


    useEffect(() => {
        console.log("Use Effect Rendered")
        fetch(`https://swapi.dev/api/people/${Math.floor(Math.random() * 16)}`)
            .then(res => res.json())
            .then(json => setPeople(json))
    }, [])

    const _renderList = useCallback(() => {
        console.log("Use Callback running")
        return [startNumber, startNumber+12, startNumber+13]
    }, [startNumber]) 

    return (
        <div style={themeStyle}>
            <h1>Custom Hooks</h1>
            <h2>People</h2>
            <pre>{JSON.stringify(people)}</pre>

            <button onClick = {() => {
                setDark(theme => !theme)
            }}>
                Dark Mode
            </button>

            <List ListItems={_renderList}/>
        </div>
    )
}

export default CusHooks