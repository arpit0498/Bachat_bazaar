import "./App.css";
import { Cart, HomePage, ProductPage, Profile, Signin, Signup, Logout, Wishlist, About, OrderSuccessful, Checkout } from "./pages/index";
import { Routes, Route, useLocation } from "react-router-dom";

import { Footer, Navbar, Slider } from "./components";
import Mockman from "mockman-js";

import { Toaster } from "react-hot-toast";



function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      {/* <Slider /> */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerStyle={{
          top: "5rem",
        }}
      />

      {/* {
        !["/signin", "/signup"].includes(location.pathname) && <Navbar />
      } */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/test" element={<Mockman />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-successful" element={<OrderSuccessful />} />
      </Routes>
      {/* {
        !["/signin", "/signup"].includes(location.pathname) && <Footer />
      } */}

    </>

  );
}

export default App;
