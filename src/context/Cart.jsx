import { createContext, useContext, useEffect, useState } from "react";
import { configOptions } from "./data";

const CartContext = createContext({});

export const CartProvider = (props) => {
  const [customProducts, setCustomProducts] = useState([]);

  useEffect(() => {
    const helmetPrice = { name: "helmetto Ak-6", price: 6500, type: "helmet" };
    const data = configOptions.map((item) => {
      const data = item.data[0];
      return { name: data.name, price: data.price, type: item.type };
    });
    data.unshift(helmetPrice);
    setCustomProducts(data);
  }, []);

  return (
    <CartContext.Provider
      value={{
        customProducts,
        setCustomProducts,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
