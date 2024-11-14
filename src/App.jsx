import { useState } from 'react'
// import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Warehouse from './pages/Warehouse/Warehouse.jsx'
import WarehouseEdit from './pages/WarehouseEdit/WarehouseEdit.jsx'
import WarehouseAdd from './pages/WarehouseAdd/WarehouseAdd.jsx'
import WarehouseDetails from './pages/WarehouseDetails/WarehouseDetails.jsx'
import Inventory from './pages/Inventory/Inventory.jsx'
import InventoryDetails from './pages/InventoryDetails/InventoryDetails.jsx'
import InventoryEdit from './pages/InventoryEdit/InventoryEdit.jsx'
import InventoryAdd from './pages/InventoryAdd/InventoryAdd.jsx'
import Header from './components/Header.jsx/Header.jsx'



function App() {

  return (
  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Routes path="/warehouse" element={<Warehouse/>}/>
        <Routes path="/warehouse/:warehouseId" element={<WarehouseDetails/>}/>
        <Routes path="/inventory" element={<Inventory/>}/>
        <Routes path="/inventory/:inventoryId" element={<InventoryDetails/>}/>
        <Routes path="/warehouse/:warehouseId/edit" element={<WarehouseEdit/>}/>
        <Routes path="/warehouse/add" element={<WarehouseAdd/>}/>
        <Routes path="/inventory/:inventoryId/edit" element={<InventoryEdit/>}/>
        <Routes path="/inventory/add" element={<InventoryAdd/>}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
