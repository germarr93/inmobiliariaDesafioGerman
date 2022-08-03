import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial = 1, precio, onAdd }) => {
  const [count, setCount] = useState(initial);

  
  const resta = () => {
    if (count > initial) setCount(count - 1);
  };
  const suma = () => {
    if (count < stock) setCount(count + 1);
  };


  return (
    <>
    <div className="counter">
        <button onClick={suma} className="boton-counter">
        +
      </button>
      <button onClick={resta} className="boton-counter">
        -
      </button>
      <h4 className="Count">
        {count}
      </h4>
    
    </div>
    <span style={{color:"blue", fontSize:"1.2em"}}><b>Total: ${count * precio}</b></span>
    <button className="agregar" onClick={()=>onAdd(count)}>AGREGAR AL CARRITO</button>
    </>
  );
};

export default ItemCount;
