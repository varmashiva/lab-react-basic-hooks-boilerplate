import { createContext, useState } from 'react'
import './App.css'
import Para from './Para'
export const background = createContext()
function App() {
  const [state, setstate] = useState(false)
  return (
    <>
    <center>
    <background.Provider value={state}>
      <button onClick={()=>{setstate(!state)}}>Toggle</button>
      <Para/>
      </background.Provider></center>
    </>
  )
}

export default App