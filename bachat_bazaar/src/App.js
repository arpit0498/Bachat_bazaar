import "./App.css";
import { Cart, HomePage, ProductPage, Profile, Signin, Signup, Wishlist, About } from "./pages/index";
import { Routes, Route, useLocation } from "react-router-dom";

import { Footer, Navbar } from "./components";
import Mockman from "mockman-js";





function App() {
  const location = useLocation();
  return (
    <>Bachat_Bazaar
      <Navbar />

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
        <Route path="/test" element={<Mockman />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* {
        !["/signin", "/signup"].includes(location.pathname) && <Footer />
      } */}

    </>

  );
}

export default App;
