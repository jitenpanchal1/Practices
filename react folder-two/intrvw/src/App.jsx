import { useContext, useState } from 'react'
import UseState from './UseState'
import Props from './Props'
import Data from './contextData/Contaexprovider'
import HocUses from './Hoccompos/HocUses'
import UseCustome from './customecompo/UseCustome'

import "./one.css"

function App() {

  const [counter, setcount] = useState(10)
  const { count, incry, color, themechang } = useContext(Data)

  const incrye = () => {
    setcount(count + 1)
  }

  return (
    <>
      <div className={color}>
        <button onClick={themechang}>chang Theme</button>
        <UseState />
        <Props name={"Jeeten"} age={counter} up={incrye} />
        <h1>Below example is Context Example</h1>
        <h1>this is count : {count} </h1>
        <button onClick={incry}>Update</button>
        <HocUses />
        <UseCustome />
      </div>
    </>
  )
}

export default App
