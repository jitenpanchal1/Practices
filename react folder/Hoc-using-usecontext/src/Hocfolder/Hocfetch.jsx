import React, { useEffect, useState } from 'react'

function Hocfetch(User) {

    const [data, setdata] = useState("")
    const [losding, setloading] = useState(true)
    const [err, seterr] = useState(null)

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/comments")
            .then((res) => {
                if (res) {
                    setdata(res)
                    setloading(false)
                }
                else {
                    throw new Error("Failed to fetch")
                }
            })
            .catch((err) => {
                seterr(err.msg)
                setloading(false)
            })
    })

    return (
        <div>
            <User />
        </div>
    )
}

export default Hocfetch
