import {useState, useEffect} from "react"
import ItemList from "./ItemList"
import articulos from "../../mock/productos"
import { useParams } from "react-router-dom"


const ItemListContainer = () => {

  const [items, setItems] = useState([])
  const [loading,setLoading] = useState(false)
  const {categoria} = useParams()
  

  useEffect(() =>  {

    setLoading(true)
  const traerArticulos = new Promise((res,rej)=>{
      const articulosFiltrdados =articulos.filter(
        (articulo) => articulo.categoria === categoria);

        setTimeout(()=>{
          categoria ? res(articulosFiltrdados): res(articulos)
        },3000)  
      });

      traerArticulos
        .then((data)=>{
          setItems(data)
          setLoading(false);
        })
        .catch((error)=>{
          console.log(error)
        })},[categoria]);

//se define para cuando haya solo un cambio para esa variable.
return (
  <div
      style={{
          display: 'flex',
          justifyContent: 'center',
      }}
  >
      {/* <h2
          className={loading ? 'grande' : 'chico'}
          style={{ color: loading ? 'red' : 'blue' }}
      >
          {saludo}
      </h2> */}
      {loading ? (
          <h1>Cargando productos...</h1>
      ) : (
          <ItemList items={items} />
      )}
  </div>
);
};

export default ItemListContainer;
