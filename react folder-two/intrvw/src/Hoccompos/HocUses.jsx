import React from 'react'
import Hoc from './Hoc'

function HocUses({ Api }) {
    return (
        <>
            <h1>This is Hoc compo this is the real use of Hoc higher order component</h1>
            <div>
                {Api.map((item) => (
                    <div key={item.id}>
                        <h1>{item.id}. {item.name}</h1>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Hoc(HocUses)
