import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import Home from "./scenes/home/Home.jsx";
import ItemDetails from "./scenes/itemDetails/ItemDetails.jsx";
import { Checkbox } from "@mui/material";
import Checkout from "./scenes/checkout/Checkout.jsx";
import Confirmation from "./scenes/checkout/Confirmation.jsx";
import Navbar from "./scenes/global/Navbar.jsx";
import CartMenu from "./scenes/global/CartMenu.jsx";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
}

function App() {
  return <div className="app">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<Confirmation />} />
        </Routes>
        <CartMenu/>
      </BrowserRouter>
    </div>;
}

export default App;
