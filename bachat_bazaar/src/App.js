import "./App.css";
import { Cart, HomePage, ProductPage, Profile, Signin, Signup, Wishlist } from "./pages/index";
import { Routes, Route, useLocation } from "react-router-dom";

import { Footer, Navbar } from "./components";
import Mockman from "mockman-js";

import logo from "./logo.png";




function App() {
  const location = useLocation();
  return (
    <>Bachat_Bazaar

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mockman-test" element={<Mockman />} />
      </Routes>

      <Footer />
    </>

  );
}

export default App;
