import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
const Cart = () => {
    
    const {cart,deleteAll,deleteOne} = useContext(CartContext);

    if(cart.length === 0){
        return <div>  
        <h2>Aun no hay productos seleccionados volver a <Link to="/">Catalogo</Link>
        </h2>
        </div>;
    }



       

};

export default Cart;