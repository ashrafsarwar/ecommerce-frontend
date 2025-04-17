import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategoury from "./Pages/ShopCategoury";
import LoginLogout from "./Pages/LoginLogout";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import banner_man from "./Components/Assets/banner_mens.png";
import banner_women from "./Components/Assets/banner_women.png";
import banner_kids from "./Components/Assets/banner_kids.png";
import Cart from "./Pages/Cart";
import CrazyProducts from "./Components/CrazyProducts/CrazyProducts";
import Latest from "./Components/Latest/Latest";
import Exclusive from "./Components/Exclusive/Exclusive";
import OrderForm from "./Components/OrderForm/OrderForm";
import { Toaster } from "react-hot-toast";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Company from "./Components/Company/Company";
import Orders from "./Components/Orders/Orders";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/women"
          element={<ShopCategoury banner={banner_women} category="women" />}
        />
        <Route
          path="/men"
          element={<ShopCategoury banner={banner_man} category="men" />}
        />
        <Route
          path="/kid"
          element={<ShopCategoury banner={banner_kids} category="kid" />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/company" element={<Company />} />
        <Route path="/loginlogout" element={<LoginLogout />} />
        <Route path="/latest" element={<Latest category="latest" />} />
        <Route path="/crazy" element={<CrazyProducts category="crazy" />} />
        <Route path="/exclusive" element={<Exclusive category="exclusive" />} />
        <Route path="/order" element={<OrderForm />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
