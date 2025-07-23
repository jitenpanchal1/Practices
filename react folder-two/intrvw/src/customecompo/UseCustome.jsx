import React from 'react'
import usetome from './Custome'

function UseCustome() {

    const { name, chname } = usetome()

    return (
        <div>
            <h1>..................This is Custome Hook</h1>
            <h1> {name} </h1>
            <button onClick={chname}>click to change</button>
        </div>
    )
}

export default UseCustome
