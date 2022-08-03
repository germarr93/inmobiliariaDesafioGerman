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
    // console.log("seleccionaste ", cantidad, " items")
    setCantidad(cantidad);
    addToCart(item,cantidad); //le paso el detalle y cantida 
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
            {/* <div><h2>{prueba}</h2></div> */}
            <h3 style={{color: "whitesmoke"}}>${precio}</h3>
        </div>
        
        <p>
          {descripcion}
        </p>
        {cantidad === 0 ? ( 
          <ItemCount stock={stock} precio={precio} onAdd={onAdd}/>
         ) : ( <NavLink to="/cart">Ir al carrito</NavLink> )}
        </div>
    </div>
  );
};

export default ItemDetail;
