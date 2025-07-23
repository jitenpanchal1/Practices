import React, { useState } from 'react'

function usetome() {

    const [name, setname] = useState("jeeten")

    const chname = () => {
        name === "jeeten" ? setname( "jeeten panchal") : setname("jeeten")
    }
    
    return {
        name,
        chname
    }
}
export default usetome
