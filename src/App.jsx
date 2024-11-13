import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Warehouse from './pages/Warehouse/Warehouse.jsx'
import Edit from './pages/Edit/Edit.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <BrowserRouter>
      <Routes>
        <Routes path="/" element={<Warehouse/>}/>
        <Routes path="/edit" element={<Edit/>}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
