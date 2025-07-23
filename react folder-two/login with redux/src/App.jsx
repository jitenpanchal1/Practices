import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usersignup } from './reduxfeature/userSlice'

function App() {

    const dispach = useDispatch()
    const { error, suc } = useSelector((state) => state.user)
    const [formData, setformdata] = useState({
        name: "",
        gmail: "",
        password: ""
    })
    
    const [msg, setmsg] = useState(null)

    const handchange = (e) => {
        setformdata((prev) =>
        ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const submit = (e) => {
        e.preventDefault()
        setmsg(null)
        if (!formData.name) {
            setmsg("name pending")
            return
        } else if (!formData.gmail) {
            setmsg("Gamil is required")
            return
        } else if (!formData.password) {
            setmsg("Password is missing")
            return
        }
        dispach(usersignup(formData))
        setformdata({
            name: "",
            gmail: "",
            password: ""
        })
    }
    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="username">Enter name : </label>
                    <input name='name' type='text' id='username' onChange={handchange} value={formData.name} />
                </div>
                <div>
                    <label htmlFor="useremail">Enter Your mail : </label>
                    <input type="email" name="gmail" id="useremail" onChange={handchange} value={formData.gmail} />
                </div>
                <div>
                    <label htmlFor="userpass">Enter Password</label>
                    <input type="password" name="password" id="userpass" onChange={handchange} value={formData.password} />
                </div>
                <div>
                    <input type="submit" value="signup" />
                </div>

                {error && <p>Submit Fail</p>}
                {suc && <p>User sig  up succesfully</p>}
                <p>{msg}</p>
            </form>
        </div>
    )
}

export default App