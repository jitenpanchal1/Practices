import React from 'react'

function Props({ name, age, up }) {
    return (
        <>
            <h1> this is a Props</h1>
            <h1> This is my : {name}</h1>
            <h1> this is my : {age}</h1>
            <button onClick={up}>Click to Add age</button>
        </>
    )
}

export default Props
