import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "router/homepage";
import Products from "router/productsPage/Products.component";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
