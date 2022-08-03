//Creo el contexto
import { createContext, useEffect, useState } from "react";
import { isCompositeComponent } from "react-dom/test-utils";

//lo exporto para saber de cual proviene
export const CartContext = createContext();

//Se crea como capa de abstraccion y se llaman a los children
// para poder visualizar la pantalla los componantes.
const Provider = (props)=>{
    const [cart, setCart] = useState([])
    const [suma,setSuma] = useState([0])


    const totalCart = () =>
    {
        let suma = 0;

        cart.forEach(item => suma += (item.precio * item.stock))
        setSuma(suma)
    
    }


    //Escucha los cambios del carrito si suma o no
    useEffect(()=>{
        console.log(cart)
        totalCart()
    },[cart])


    const addToCart = (item,cantidad) =>
    {   //utilizo spread operator para agregar todo "junto"
        // console.log({...item,cantidad}
        // console.log('agregando al carrito')
        
        if(isInCart(item.id))
        {
            alert('Ya esta en el carrito')
        }
        else{  setCart([...cart,{...item,cantidad}])}
      
    }

    //funcion que busca si el item esta en el carrito
    ////saber si esta o no, devuelve un true or false la funcion
    const isInCart = (id) =>
    {
            
      return cart.some((prod) => prod.id === id)
    }

    //Funcion que trae los articulos distintos al 
    const deleteOne = (id) =>
    {
        const articulos = cart.filter((prod)=> prod.id !== id);
        setCart(articulos);
    }
    const deleteAll = () =>
    {
        setCart([])
    }

   return(
     <CartContext.Provider value={{cart,addToCart,deleteOne,deleteAll}}>
        {props.children}
     </CartContext.Provider>
    )
}
export default Provider;
