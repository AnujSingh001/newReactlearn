import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 py-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 bg-black rounded-3xl' style={{padding:"20px"}}>
          <button className='outline-none px-4 py-1 rounded full text-white bg-red-700' onClick={()=>setColor("red")}>Red</button>
          <button className='outline-none px-4 py-1 rounded full text-white bg-green-700' onClick={()=>setColor("green")}>green</button>
          <button className='outline-none px-4 py-1 rounded full text-white bg-blue-700'onClick={()=>setColor("blue")}>blue</button>
          <button className='outline-none px-4 py-1 rounded full text-white bg-pink-500' onClick={()=>setColor("pink")}>pink</button>
          <button className='outline-none px-4 py-1 rounded full text-white bg-black' onClick={()=>setColor("black")}>black</button>
          <button className='outline-none px-4 py-1 rounded full text-white' style={{backgroundColor:"brown"}} onClick={()=>setColor("brown")}>brown</button>
          <button className='outline-none px-4 py-1 rounded full text-white ' style={{backgroundColor:"skyblue"}} onClick={()=>setColor("skyblue")}>skyblue</button>
          <button className='outline-none px-4 py-1 rounded full text-black bg-white' onClick={()=>setColor("white")}>white</button>
          <button className='outline-none px-4 py-1 rounded full text-white 'style={{backgroundColor:"olive"}} onClick={()=>setColor("olive")}>olive</button>
          </div>
      </div>
    </div>
     
    </>
  )
}

export default App
