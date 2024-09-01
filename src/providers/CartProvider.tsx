import { createContext , PropsWithChildren, useContext, useMemo, useState } from "react";
import { CartItem, Product } from "../Types/types";

type CartType ={
    items: CartItem[],
    addItem: (product:Product, size:CartItem['size']) => void,
    updateQuantity: (id:string, quantity:-1 | 1) => void,
    total: number,
    
}

export const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
  updateQuantity: () => {},
  total: 0,
 
});

const CartProvider = ({ children }:PropsWithChildren) => {
    
    const [items, setItems] = useState<CartItem[]>([]);
   
    //addItem
    const addItem = (product:Product, size:CartItem['size']) => {
       
        // Check if the item is already in the cart
        const item = items.find((item) => item.product_id === parseInt(product.id) && item.size === size);
        if(item){

            // Increment the quantity
            item.quantity += 1;
            setItems([...items]);
            return;
        }
       
        // Add the item to the cart
        const newCartItem:CartItem = {
            id: Math.random().toString(),
            product,
            product_id: parseInt(product.id),
            size,
            quantity: 1,
        };
        setItems([newCartItem, ...items]); 
    }

    console.log("items",items);
    
    //updateQuantity
    const updateQuantity = (id:string, quantity:-1 | 1) => {
        
        const item = items.find((item) => item.id === id);
        if(item){
            item.quantity += quantity;
            if(item.quantity === 0){
                setItems(items.filter((item) => item.id !== id));
            }else{
                setItems([...items]);
            }
        }
    }

    const total = useMemo(() =>{
        return items.reduce((total,item)=> total + item.product.price.amount * item.quantity,0);
    },[items]);



    return (
        <CartContext.Provider value={{ items, addItem, updateQuantity,total}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;

export const useCart = () => {
    return useContext(CartContext);
}