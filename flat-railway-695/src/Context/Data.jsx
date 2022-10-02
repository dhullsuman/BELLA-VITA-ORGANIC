import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cartdata, setCartdata] = useState([]);
  let [total, setTotal] = useState(0);
  function AddToCart(newdata) {
    let s = cartdata.filter((elem) => {
      return elem.id === newdata.id;
    });
    s.length > 0 ? alert("already Added") : SetdataCart(newdata);
  }
  function SetdataCart(newdata) {
    setCartdata([...cartdata, newdata]);
    let x = total + Number(newdata.latest_price);
    setTotal(x);
  }
  return (
    <CartContext.Provider value={{ cartdata, AddToCart, setCartdata, total }}>
      {children}
    </CartContext.Provider>
  );
}
