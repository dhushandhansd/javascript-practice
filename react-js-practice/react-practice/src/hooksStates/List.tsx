import { useEffect, useState } from "react"

const List = ({ListItems}) => {

    const [listItem, setListItem] = useState()

    useEffect(() => {
        setListItem(ListItems);
        console.log('List Item Generated')
    }, [ListItems])

    return <p>{listItem}</p>
}

export default List