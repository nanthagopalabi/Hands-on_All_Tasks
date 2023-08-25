import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [myObject, setMyObject] = useState({ 
    Title: "iPhone 9",
    Description: "An apple mobile which is nothing like apple",
    DiscountPercentage: 12.96,
    Rating: 4.69,
    Stock: 94,
    Brand: "Apple",
    Category: "smartphones"
 });
 const [myObject1, setMyObject1] = useState({ 
  Title: "iPhone X",
  Description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
  Price: 899,
  DiscountPercentage: 17.94,
  Rating: 4.44,
  Stock: 34,
  Brand: "Apple",
  Category: "smartphones",
});
const [myObject2, setMyObject2] = useState({ 
  Title: "Samsung Universe 9",
  Description: "Samsung's new variant which goes beyond Galaxy to the Universe",
  Price: 1249,
  DiscountPercentage: 15.46,
  Rating: 4.09,
  Stock: 36,
  Brand: "Samsung",
  Category: "smartphones",
});
const [myObject3, setMyObject3] = useState({  
    Title: "OPPOF19",
    Description: "OPPO F19 is officially announced on April 2021.",
    Price: 280,
    DiscountPercentage: 17.91,
    Rating: 4.3,
    Stock: 123,
    Brand: "OPPO",
  Category: "smartphones",
});

  return (
    <CartContext.Provider value={{ myObject, setMyObject,myObject1,setMyObject1,myObject2, setMyObject2,myObject3, setMyObject3}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
