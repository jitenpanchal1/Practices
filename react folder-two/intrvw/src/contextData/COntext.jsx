import React, { useState } from 'react'
import Data from './Contaexprovider'

function COntext({ children }) {

    const [count, setcount] = useState(0)

    const incry = () => {
        setcount(count + 1)
    }

    const [color, setcolor] = useState("themetwo")

    const themechang = () => {
        color === "themetwo" ? setcolor("theme") : setcolor("themetwo")
    }
    return (
        <>
            <Data.Provider value={{ count, incry, themechang, color }}>
                {children}
            </Data.Provider>
        </>
    )
}

export default COntext
