import {useState, useEffect} from "react"
import ItemList from "./ItemList"
import articulos from "../../mock/productos"
import { useParams } from "react-router-dom"
import {collection,getDocs,getFirestore} from 'firebase/firestore'



const ItemListContainer = () => {

  const [items, setItems] = useState([])
  const [loading,setLoading] = useState(false)
  const {categoria} = useParams()
  const [list,setList] = useState([]);

 
const getProducts = async () => {

  const db = getFirestore();
  await getDocs(collection(db,'productos')).then((snapshot) => {
    const dataExtraida = snapshot.docs.map((datos) => datos.data());
    setList(dataExtraida)
  });
};

// useEffect(()=>{
//  getProducts();
// },[])
// }

  useEffect(() =>  {

    getProducts()
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

return (
  <div
      style={{
          display: 'flex',
          justifyContent: 'center',
      }}
  >
    
      {loading ? (
          <h1>Cargando productos...</h1>
      ) : (
          <ItemList items={items} />
      )}
  </div>
);
};

export default ItemListContainer;
