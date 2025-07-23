import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router'

function Login() {

    const [name, setname] = useState("")
    const [password, setpassword] = useState("")
    const [msg, setmsg] = useState()

    const handlogin = async (e) => {
        e.preventDefault()

        try {
            const rawdata = await axios.get("http://localhost:2020/data")
            const user = rawdata ? rawdata.data : []
            const userr = user.find(u => u.name === name && u.password === password)

            if (userr) {
                setmsg("log in successfully")
            } else {
                setmsg("login failed")
            }

        } catch (err) {
            setmsg("problem found in server plr try after some time")
        }
    }


    return (
        <>
            <div>
                <form onSubmit={handlogin}>
                    <div>
                        <label htmlFor="name">Enter your name </label>
                        <input
                            id='name'
                            type="text"
                            value={name}
                            onChange={(e) => setname(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="pass">Enter password </label>
                        <input
                            type="password"
                            id="pass"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)} />
                    </div>
                    <div>
                        <h1>{msg}</h1>
                    </div>
                    <div>
                        <input type="submit" value="submit" />
                    </div>
                    <div>
                        <p>
                            if you not registersd go to <Link to="/"> register form</Link>
                        </p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login
