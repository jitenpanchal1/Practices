import React, { useState } from 'react'

function Hoc(Compo) {

    return function fech() {

        const [daata, setdaata] = useState([])

        const data = fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((call) => {
                setdaata(call)
            })
            .catch((error) => {
                console.log(error)
            })

        return <Compo Api={daata} />
    }
}
export default Hoc