import React, { useState } from 'react'

function UseState() {

    const [count, setcount] = useState(0)
    const up = () => {
        setcount(count + 1)
    }
    return (
        <>
            <h1> UseState</h1>
            <h1>1. useState used to initialise the value and this can be string,number,boolean,object,array etc. </h1>
            <h1> 2.this usestate give a function also to change state.</h1>

            <h2>{count}</h2>
            <button onClick={up}>Increament</button>
        </>
    )
}

export default UseState
