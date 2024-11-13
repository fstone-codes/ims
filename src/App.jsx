import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <BrowserRouter>
      <Routes>
        <Routes path="/" element={<Warehouse/>}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
