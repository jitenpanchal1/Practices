import React from 'react'

function Child({ item, additem }) {
    console.log("i am rendering")
    return (
        <>
            <div>
                <h1> item {item}</h1>
            </div>
            <div>
                <button
                    onClick={additem}>
                    click add item
                </button>
            </div>
        </>
    )
}

export default React.memo(Child)
