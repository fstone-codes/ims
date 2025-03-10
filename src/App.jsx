import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warehouse from "./pages/Warehouse/Warehouse.jsx";
import WarehouseEdit from "./pages/WarehouseEdit/WarehouseEdit.jsx";
import WarehouseAdd from "./pages/WarehouseAdd/WarehouseAdd.jsx";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails.jsx";
import Inventory from "./pages/Inventory/Inventory.jsx";
import InventoryDetails from "./pages/InventoryDetails/InventoryDetails.jsx";
import InventoryEdit from "./pages/InventoryEdit/InventoryEdit.jsx";
import InventoryAdd from "./pages/InventoryAdd/InventoryAdd.jsx";
import Header from "./components/Header.jsx/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Warehouse />} />
                <Route path="/warehouse" element={<Warehouse />} />
                <Route path="/warehouse/:warehouseId" element={<WarehouseDetails />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/inventory/:inventoryId" element={<InventoryDetails />} />
                <Route path="/warehouse/:warehouseId/edit" element={<WarehouseEdit />} />
                <Route path="/warehouse/add" element={<WarehouseAdd />} />
                <Route path="/inventory/:inventoryId/edit" element={<InventoryEdit />} />
                <Route path="/inventory/add" element={<InventoryAdd />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
