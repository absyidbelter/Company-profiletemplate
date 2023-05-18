import { NavLink } from "react-router-dom"
import { Home, Router } from "./Componant"
import logo from "./Resources/img/logo.png"
const App = () => {
  return (
<>
<nav>
         <ul className="topnav">
            <li><p><img src={logo}  height="50" /></p></li>
            <div className="right">
            <li ><NavLink  className={props=>props.isActive ? "active":""} to={"/home" }>Home</NavLink></li>
            <li><NavLink  to={"/about"} >About</NavLink></li>
            <li ><NavLink to={"/project"} >project</NavLink></li>
            <li ><NavLink  to={"/contact"} >Contact</NavLink></li>
         </div>
         </ul>
      </nav>
      <Router/>
      <footer>
         <div className="copyright">
            Copyright 2023 . All Rights Reserved Sobhi Sami .
         </div>
      </footer>
</>
  )
}
export default App
