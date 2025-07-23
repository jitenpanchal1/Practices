import React, { useEffect, useReducer, useState } from 'react'

const int = {
  task: []
}

const fun = (state, action) => {
  switch (action.type) {
    case "Add": return {
      ...state,
      task: [...state.task, action.payload]
    }
    case "Delet":
      const update = state.task.filter((_, index) => {
        return index !== action.payload
      })
      return {
        task: update
      }
    default: return state;
  }
}

function App() {

  const [stat, dispatcher] = useReducer(fun, int)
  const [inp, setinp] = useState("")


  const add = () => {
    if (inp.trim()) {
      dispatcher({ type: "Add", payload: inp })
      setinp("")
    }
  }

  const delet = (index) => {
    dispatcher({ type: "Delet", payload: index })
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={inp}
          onChange={(e) => setinp(e.target.value)} />
        <button onClick={add}>Add Task</button>
      </div>
      <div>
        <ul>
          {stat.task.map((item, index) => (
            <li key={index} style={{ listStyle: 'none' }}>
              {index}.    {item}  <button onClick={() => delet(index)}>Delet Todo</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
