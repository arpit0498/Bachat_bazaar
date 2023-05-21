import "./App.css";
import { Cart, HomePage, ProductPage, Profile, Signin, Signup, Wishlist } from "./pages/index";
import { Routes, Route } from "react-router-dom";
import logo from "./logo.png";

function App() {
  return (
    <>Bachat_Bazaar
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
      </Routes></>

  );
}

export default App;
