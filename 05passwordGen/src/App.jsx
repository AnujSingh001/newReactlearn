import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed){
      str+="0123456789"
    }
    if(charAllowed){
      str+="!@#$%^&*()[]"
    }

    for(let i=0; i<length; i++){
      let char =Math.floor(Math.random()*str.length )
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length, numberAllowed, charAllowed, setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator])

  const passwordRef = useRef(null)

  const copytoClipBorad = ()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select() // to highlight which portion is selected
    //passwordRef.current?.setSelectionRange(0, 5) to select in a range
  }
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-500 text-orange-500'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-ld overflow-hidden mb-4'>
          <input type="text"
          placeholder='password'
          value={password}
          readOnly
          className='outline-none px-3 py-1 w-full rounded-md'
          ref={passwordRef}
           />

           <button onClick={copytoClipBorad} className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'>copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            min={8}
            max={50}
            value={length}
            className='cursor-pointer'
            type="range"
            onChange={(e)=>{setLength(e.target.value)}}
             />

            <label> length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            id='NumberInput'
            onChange={()=>{
              setNumberAllowed((prev)=>
                !prev
                
              )
            }}
            />
            <label htmlFor="NumberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={charAllowed}
            id='CharInput'
            onChange={()=>{
              setCharAllowed((prev)=>
                !prev
                
              )
            }}
            />
            <label htmlFor="CharInput">charactor</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
