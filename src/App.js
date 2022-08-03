import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Provider from "./context/cartContext";

function App () {
  return (
    <div className="App">
      <Provider>
       <BrowserRouter>  
      <Navbar />
      <Routes>
      <Route path="/" element={<ItemListContainer />}/> 
      <Route path="/categorias/:categoria" element={<ItemListContainer />}/>
      <Route path="/item/:id" element={<ItemDetailContainer/>} /> 
      <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
