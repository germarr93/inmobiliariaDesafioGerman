import CartWidget from "./CartWidget";
// import logo from "./logo.svg";
import "./Navbar.css"
import {Link,NavLink} from "react-router-dom"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/"  className="logo-container">
        <h1 className="titulo">Inmobiliaria Montevideo</h1>
         {/* <img src={logo} alt="logo" className="logo"/> */}
      </NavLink>
      <div className="link-container"> 
        <ul >
          <NavLink to="/categorias/hogaresNuevos" className={({isActive})=>isActive ? "link-activo" : "link"}>Hogares Nuevos</NavLink>
          <NavLink to="/categorias/apartamentos"className={({isActive})=>isActive ? "link-activo" : "link"}>Apartamentos</NavLink>
          <NavLink to="/categorias/imagenes" className={({isActive})=>isActive ? "link-activo": "link"}>Imagenes</NavLink>
          <NavLink to="/components/cart" className={({isActive})=>isActive ? "link-activo": "link"}> Ir al carro</NavLink>
          <CartWidget />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
