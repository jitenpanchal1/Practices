import React, { useCallback, useState } from 'react'
import Child from './Child'

export default function Usecall() {

    const [count, setcount] = useState(0)
    const [item, setitem] = useState(5)

    const additem = useCallback(() => {
        setitem(item + 1)
    }, [item])

    const addcount = () => {
        setcount(count + 1)
    }

    return (
        <>
            <div>
                <h1>this is count {count}</h1>
                <button
                    onClick={addcount}>
                    click add count
                </button>
            </div>
            <div>
                <Child item={item} additem={additem} />
            </div>
        </>
    )
}

