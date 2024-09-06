import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  let addValue = ()=>{
    let newvalue=count+1
    setCount(newvalue)
  }

  let removeValue= ()=>{
    let newValue = count-1
    setCount(newValue)
  }

  return (
    <>
      <h2 >Counter App by Anuj Budhwar</h2>
      <h2>count: {count}</h2>

      <button onClick={addValue}>value up</button>
      <br />
      <button onClick={removeValue}>value down</button>
    </>
  )
}

export default App
