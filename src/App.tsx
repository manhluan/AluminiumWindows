import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "router/homepage";
import Products from "router/productsPage/Products.component";
import ProductItem from "router/productItem/ProductItem.component";
import ContactUs from "router/contactPage/ContactUs.component";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<ProductItem/>} />
        <Route path="/contact-us" element={<ContactUs />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
