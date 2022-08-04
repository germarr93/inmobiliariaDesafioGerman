import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";


const Cart = () => {

    const {cart, deleteAll, deleteOne, suma} = useContext(CartContext)
    
    if (cart.length === 0) {
        return (
            <h2>
                No se encuentra nada seleccionado <Link to="/">Volver al inicio</Link>
            </h2>
        )
    }

  return (
    <div>
            {cart.map((item) => (
                <div key={item.id} className="m-5 d-flex row text-center" >
                  <div className='col-2'>
                        <img src={item.imagen} width="120px" height="120px" alt={item.nombre} />
                  </div>
                    <div className='col-3'>
                        <h2>{item.nombre}</h2>
                        <br />
                        <p>{item.descripcion}</p>
                    </div> 
                    <div className='col-3'>
                        <h2>Cantidad: {item.cantidad}</h2>
                    </div>
                    <div className='col-2'>
                        <h2>$ {item.precio}</h2>
                    </div>
                    <div className='col-2'>
                        <button onClick={() => deleteOne(item.id)}>Eliminar</button>
                    </div>
                </div>
            ))}
            <div className='d-flex row m-5'>
              <div className='col-3'>
            <button onClick={deleteAll}>Eliminar todas las casas</button>
              </div>
              <div className='col-3'>
            <h3>Total: $ {suma}</h3>
              </div>
            </div>
        </div>
  )
}

export default Cart