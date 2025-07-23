import React, { useState } from 'react'

function Input() {

    const [mail, setmail] = useState("")
    const [password, setpassword] = useState("")
    const [err, seterr] = useState({})

    const valid = () => {
        const Newerror = {}

        const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const ispassword = /^[A-Za-z0-9!@#$%^&*()_+={}\[\]:;"'<>,.?/`~|\\-]{8,16}$/;

        if (!mail) {
            Newerror.mail = `email is required !`;
        } else if (isValidEmail.test(mail)) {
            // console.log("valid mail")
            Newerror.mail = `valid mail`;
        } else {
            Newerror.mail = `not valid mail`;
        }

        if (!password) {
            Newerror.password = `password is required !`;
        } else if (ispassword.test(password)) {
            Newerror.password = `password is valid !`;
        } else {
            Newerror.password = `password is not valid !`;
        }

        seterr(Newerror)
    }

    const handler = (event) => {
        event.preventDefault()
        if (valid()) {
            console.log(`email name ${mail}  and password is ${password}`)
        }
    }

    const handlertwo = (hand) => {
        setmail(hand.target.value)
    }


    const handlerthree = (hand) => {
        setpassword(hand.target.value)
    }

    return (
        <div className='container'>
            <form onSubmit={handler} >
                <div>
                    <div>
                        <label htmlFor="mail"> enter mail  </label>
                        <input type="email" id="mail"
                            onChange={handlertwo}
                            value={mail} />
                    </div>
                    <div>
                        <p>{err.mail}</p>
                    </div>
                    <div>
                        <label htmlFor="password">enter password</label>
                        <input type="password" id="password"
                            onChange={handlerthree}
                            value={password} />
                    </div>
                    <div>
                        <p>{err.password}</p>
                    </div>
                    <div>
                        <input type="submit" value="submit" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Input
