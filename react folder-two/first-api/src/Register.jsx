import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router'

function Register() {

    const [name, setname] = useState("")
    const [password, setpassword] = useState("")
    const [msg, setmsg] = useState("")

    const handregister = async (e) => {
        e.preventDefault()

        const rawdata = await axios.get('http://localhost:2020/data')
        const user = rawdata ? rawdata.data : []
        const userr = user.find(u => u.name === name || u.password === password)

        if (userr) {
            setmsg("user name is already exist !")
            return;
        }

        if (!name || !password) {
            setmsg("required all field filled")
        }

        try {
            await axios.post('http://localhost:2020/data', { name, password });
            setmsg("register in successfully now you can log in")
        } catch (err) {
            setmsg("not registered check details")
        }

    }
    return (
        <>
            <div>
                <form onSubmit={handregister}>
                    <div>
                        <label htmlFor="name">Enter your user name </label>
                        <input
                            id='name'
                            type="text"
                            onChange={(e) => setname(e.target.value)}
                            value={name} />
                    </div>
                    <div>
                        <label htmlFor="pass">Enter your password </label>
                        <input
                            type="password"
                            id="pass"
                            onChange={(e) => setpassword(e.target.value)}
                            value={password} />
                    </div>
                    <div>
                        <h1> {msg} </h1>
                    </div>
                    <div>
                        <input type="submit" value="submit" />
                    </div>
                    <div>
                        <p>
                            if you already register than go to <Link to="/login" >login</Link>
                        </p>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Register
