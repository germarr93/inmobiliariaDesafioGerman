import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { NavLink } from "react-router-dom";

const ItemDetail = ({item}) => {
  const [cantidad,setCantidad] = useState(0); 
  const {addToCart}  = useContext(CartContext);
  const {nombre, precio, imgDetalle, stock, descripcion, extra} = item
 

   const onAdd = (cantidad) => {
   
    setCantidad(cantidad);
    addToCart(item,cantidad); 
  }



  return (
    <div className="itemDetail">
      <div className="img-detail-cont">
        <img src={imgDetalle} alt={nombre} className="img-detail" />
      </div>
      <div className="text-container">
        <div className="titulo-container">
            <h1>{nombre}</h1>
            {extra && <span>{extra}</span>}
            {}
            <h3 style={{color: "whitesmoke"}}>${precio}</h3>
        </div>
        <p> {descripcion}</p>
        <h3>Selecciona la cantidad</h3>
        {cantidad === 0 ? ( 
          <ItemCount stock={stock} precio={precio} onAdd={onAdd}/>
         ) : ( <NavLink to="/cart">Ir al carrito</NavLink>
          )} <NavLink to="/"><button>Seguir comprando</button></NavLink>

      
        </div>
    </div>
  );
};

export default ItemDetail;
