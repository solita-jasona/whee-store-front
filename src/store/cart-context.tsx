import React, { useState } from 'react';
import CartItem from '../models/CartItem';

export type CartContextObj = {
  cartItems: CartItem[],
  cartOpen: boolean,
  cartTotalQuantity: number,
  cartTotalPrice: number,
  addItem: (id: number, name: string, quantity: number, price: number, image: string) => void,
  removeItem: (id: number) => void,
  removeProduct: (id: number, name: string, quantity: number, price: number, image: string) => void,
  toggleCart: (open: boolean) => void,
}

export const CartContextStartObject = {
  cartItems: [],
  cartOpen: false,
  cartTotalQuantity: 0,
  cartTotalPrice: 0,
  addItem: () => {},
  removeItem: () => {},
  removeProduct: () => {},
  toggleCart: () => {}
}

export const CartContext = React.createContext<CartContextObj>(CartContextStartObject)

const CartContextProvider: React.FC<{ children: React.ReactNode}> = (props) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [totalQuantity, setTotalQuantity] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const addItemHandler = async (id: number, name: string, quantity: number, price: number, image: string) => {
    const newItem = new CartItem(id, name, quantity, price, image);
    await setItems((prevState) => {
      const existingCartItemIndex = prevState.findIndex(
        (item) => item.id === newItem.id
      );
      const existingCartItem = prevState[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + newItem.quantity
        };
        updatedItems = [...prevState];
        updatedItems[existingCartItemIndex] = updatedItem;
        return updatedItems;
      } else {
        return prevState.concat(newItem)
      }
    })
    await setTotalQuantity((prevState) => {
      return (prevState + newItem.quantity);
    })
    await setTotalPrice((prevState) => {
      return (prevState + (newItem.price * newItem.quantity));
    })
  }

  const removeItemHandler = async (id: number) => {
    let foundItem = false;
    let removePrice = 0;
    await setItems((prevState) => {
      const existingCartItemIndex = prevState.findIndex(
        (item) => item.id === id
      );
      const existingCartItem = prevState[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        foundItem = true;
        removePrice = existingCartItem.price;
        if (existingCartItem.quantity === 1) {
          return prevState.filter(item => item.id !== id);
        }
        else {
          const updatedItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity - 1
          };
          updatedItems = [...prevState];
          updatedItems[existingCartItemIndex] = updatedItem;
          return updatedItems;
        }
      }
      return prevState;
    })
    if (foundItem) {
      await setTotalQuantity((prevState) => {
        return (prevState - 1);
      })
      await setTotalPrice((prevState) => {
        return (prevState - removePrice);
      })
    }
      
  }

  const removeProductHandler = async (id: number, name: string, quantity: number, price: number, image: string) => {
    const removeItem = new CartItem(id, name, quantity, price, image);
    let foundItem = false;
    await setItems((prevState) => {
      const existingCartItemIndex = prevState.findIndex(
        (item) => item.id === removeItem.id
      );
      if (existingCartItemIndex !== -1) {
        foundItem = true;
        return prevState.filter(item => item.id !== removeItem.id);
      }
      return prevState;
    })
    if (foundItem) {
      await setTotalQuantity((prevState) => {
        return (prevState - removeItem.quantity);
      })
      await setTotalPrice((prevState) => {
        return (prevState - (removeItem.quantity * removeItem.price));
      })
    }

  }

  const setCartIsOpenHandler = (open: boolean) => {
    setIsCartOpen((prevState) => {
      return !prevState;
    });
  }

  const contextValue: CartContextObj = {
    cartItems: items,
    cartOpen: isCartOpen,
    cartTotalQuantity: totalQuantity,
    cartTotalPrice: totalPrice,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    toggleCart: setCartIsOpenHandler,
    removeProduct: removeProductHandler
  }

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;