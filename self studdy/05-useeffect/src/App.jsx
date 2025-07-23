import { useEffect, useState } from 'react'


function App() {

  let [count, setcount] = useState(0)
  let [coloou, setcoloor] = useState("")
  let [msg, setmsg] = useState()


  let Updatetwo = useEffect(() => {
    if (count >= 5) {
      setcoloor("red")
      setmsg("you are in danger zone")
      count = -6
    }
  }, [count])

  function Update() {
    setcount(count + 1)
  }
  return (
    <>
      <div>
        <h2
          style={{ backgroundColor: coloou }}
        >
          this is my work exoeriance is increasing {count}</h2 >
      </div>
      <button
        onClick={Update}>click me to see magic
      </button>

      <div>
        <h1 style={{ backgroundColor: coloou }}>{msg}</h1>
      </div>
    </>
  )
}

export default App
