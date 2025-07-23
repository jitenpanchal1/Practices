import { useEffect, useState } from 'react'


function App() {

  const [name, setname] = useState("")


  // useEffect(() => {
  //   const savename = localStorage.getItem("name")
  //   if (savename) {
  //     setname(savename)
  //   }

  // }, [])

  const Change = (e) => {
    setname(e.target.value)
  }

  const set = () => {
    localStorage.setItem("name", (name.toString()))
  }

  return (
    <>
      <div>
        <label htmlFor="name">Enter name here </label>
        <input type="text"
          id='name'
          placeholder='Enter name'
          value={name}
          onChange={Change} />
      </div>
      <div>
        <input type="submit"
          value="submit"
          onClick={set} />
      </div>
    </>
  )
}

export default App
