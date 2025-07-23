import { useMemo, useState } from 'react'

function App() {
  const [count, setcount] = useState(0)
  const [item, setitem] = useState(10)

  const Update = () => {
    setcount(count + 1)
  }

  const Update2 = () => {
    setitem(item + 5)
  }

  const mame = useMemo(() => {
    console.log("hello")
  }, [])

  return (
    <>

      <div>
        <h1> count : {count}</h1>
        <h1>items : {item}</h1>
      </div>
      <div>
        <button
          onClick={Update}>
          click me update count
        </button>
      </div>
      <div>
        <button
          onClick={Update2}>
          click to update items
        </button>
      </div>
    </>
  )
}

export default App
