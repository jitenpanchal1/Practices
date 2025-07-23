import React, { useCallback, useState } from 'react'

function App() {

  // let [count, setcount] = useState(0)

  // let Handlecounnt = useCallback(() => {
  //   console.log("count increased")
  //   if (count > 9) {
  //     count = 0
  //     console.log("end")
  //   }
  //   setcount(count + 1)
  // }, [count])

  // let [lenght, setlenght] = useState(8)
  // let [numallow, setnumalloe] = useState(false)
  // let [charecter, setcharecter] = useState(false)
  // let [password, setpassword] = useState("")


  // let generatepassword = useCallback(() => {
  //   let pass = ""
  //   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxtz"

  //   if (numallow) {
  //     str += "1234567890"
  //   }
  //   if (charecter) {
  //     str += "[]{}-+=?.><:;*&^%$#@!`~"
  //   }

  //   for (let i = 0; i <= lenght; i++) {
  //     let char = Math.floor(Math.random() * str.length + 1)
  //     pass += str.charAt(char)
  //   }

  //   console.log(password)

  //   setpassword(pass)
  // }, [numallow, charecter, lenght, password])

  // function Change(e) {
  //   setlenght(e.target.value)
  // }

  // function Changenum() {
  //   setnumalloe(pre => !pre)
  // }

  // function changechar() {
  //   setcharecter(pre => !pre) 
  // }

  let [num, setnum] = useState(false)
  let [char, setchar] = useState(false)
  let [lenght, setlenght] = useState(8)
  let [password, setpassword] = useState("")

  let passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (num) {
      str += "1234567890"
    }

    if (char) {
      str += "!@#$%^&*()_-+=*`~+-{}|[]\:;'"
    }

    for (let i = 0; i <= lenght; i++) {
      let code = Math.floor(Math.random() * str.length)
      // console.log(code)
      pass += str.charAt(code)
      // console.log(pass)
    }

    setpassword(pass)

    // console.log(pass)
  }, [lenght, num, char, password])

  function rangechange(e) {
    setlenght(e.target.value)
  }
  function numchange() {
    setnum(pre => !pre)
  }
  function charchange() {
    setchar(pre => !pre)
  }

  return (
    <div>
      {/* <h1>
        hi thi is my count {count}
      </h1>
      <h1>
        <button
          onClick={Handlecounnt}>
          click to +1 count
        </button>
      </h1> */}
      {/* <div>
        <button onClick={generatepassword}>
          click to generate password
        </button>
        <form action="">
          <div>
            <input
              type="text"
              value={password}
              placeholder='password'
              readOnly />
          </div>
          <div>
            <div>
              <input type="range"
                min={8}
                max={50}
                value={lenght}
                onChange={Change} />
              <label> lenght : {lenght}</label>
            </div>
            <div>
              <input type="checkbox"
                id=""
                defaultChecked={numallow}
                onChange={Changenum} />
              <label>Add number in the box</label>
            </div>
            <div>
              <input type="checkbox" id=""
                defaultChecked={charecter}
                onChange={changechar} />
              <label>Add character</label>
            </div>
          </div>
        </form>
      </div> */}

      <div>
        <div>
          <button
            onClick={passwordgenerator}>
            click Here to generat password
          </button>
        </div>
        <form>
          <div>
            <input type="text"
              value={password}
              readOnly
              placeholder='password generated here' />
          </div>
          <div>
            <input type="range"
              min={8}
              max={80}
              // readOnly
              value={lenght}
              onChange={rangechange} />
            <label>
              Total lenth is {lenght}
            </label>
          </div>
          <div>
            <input type="checkbox"
              value={num}
              // readOnly
              onChange={numchange} />
            <label>
              tick this to add number
            </label>
          </div>
          <div>
            <input type="checkbox"
              value={char}
              // readOnly
              onChange={charchange} />
            <label>
              tick here to add symbol
            </label>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
