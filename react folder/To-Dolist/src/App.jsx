import { useState } from 'react'


function App() {

  const [task, settask] = useState("")
  const [multitask, setmultitask] = useState([])

  const Addtask = () => {
    if (task.trim()) {
      setmultitask([...multitask, { text: task, checked: false }])
      settask("")
    } 
  }

  const delet = (index) => {
    const Update = multitask.filter((tas, i) => {
      if (index === i) {
        return false
      } else { 
        return true
      }
    })
    setmultitask(Update)
  }

  const toggle = (index) => {
    const Updatechacked = multitask.map((item, i) => {
      if (index === i) {
        return { ...item, checked: !item.checked }
      }
      return item
    })
    setmultitask(Updatechacked)
  }


  return (
    <>
      <div>
        <input type="text"
          placeholder='enter your task'
          value={task}
          onChange={(e) => { settask(e.target.value) }} />
        <button
          onClick={Addtask}>
          Add task
        </button>
      </div>
      <div>
        <ul>
          {multitask.map((tas, index) => {
            return (
              <li key={index}>
                <input type="checkbox"
                  checked={tas.checked}
                  onChange={() => toggle(index)} />
                {tas.text}
                < button
                  onClick={() => delet(index)}>
                  click to delet
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default App
