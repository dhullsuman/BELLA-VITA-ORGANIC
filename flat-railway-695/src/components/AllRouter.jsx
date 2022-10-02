import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import ShopAll from "./ShopAll";
import Bestseller from "./Bestseller";
import SkinCare from "./SkinCare";
import ComboGifts from "./ComboGifts";
import BodyCare from "./BodyCare";
import Perfumes from "./Perfumes";
import Cart from "./Cart";
export default function AllRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/ShopAll" element={<ShopAll />} />
        <Route path="/Bestseller" element={<Bestseller />} />
        <Route path="/SkinCare" element={<SkinCare />} />
        <Route path="/ComboGifts" element={<ComboGifts />} />
        <Route path="/BodyCare" element={<BodyCare />} />
        <Route path="/Perfumes" element={<Perfumes />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
