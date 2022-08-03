import {useState, useEffect} from "react"
import ItemDetail from "./ItemDetail"
import lista from "../../mock/productos"
import {useParams} from "react-router-dom"
const ItemDetailContainer = () => {
  const [item, setItem] = useState({})
  const {id} = useParams()

  const traerItemPorId = () => {
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(lista.find(obj => obj.id === id))
      }, 1000)
    })
  }

  useEffect(()=>{
    traerItemPorId().then(respuesta=>{
      setItem(respuesta)
    }      
    )
  },[id, traerItemPorId])




  return (
    <ItemDetail item={item}/>
  )
}

export default ItemDetailContainer