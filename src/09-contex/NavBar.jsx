import { Link,NavLink } from "react-router-dom"

export const NavBar = ({ page, name }) => {
  return (
    //  usamos el link para crear la navegacion, esto hace que no se renderice toda la aplicacion, solo carga la parte necesaria, es importado desde la libreria react-router-dom
    <>
        {/* <Link to = "/s "> Home Page </Link>
        <Link to = "/about" > about Page </Link>
        <Link to = "/login" > Login Page </Link> */}

        <ul className="nav nav-tabs">
            {/* <li className="nav-item">
                <Link className="nav-link" aria-current="page" to = "/">Home Page</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">about Page</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to = "/login">Login Page</Link>
            </li> */}
            <NavLink
                to="/"
                className={ ({isActive}) =>  `nav-link ${isActive ?'active': ''}`}>
                Home Page
            </NavLink>

            {/* // ejemolo de los argumentos que muestra */}
            {/* <NavLink
                to="/about2"
                className={ (args) => {
                    console.log((args))
                    return "nav-link"
            }}></NavLink> */}
            <NavLink
                to="/about"
                className={ ({isActive}) =>  `nav-link ${isActive ?'active': ''}`}>

                About Page
            </NavLink>
            <NavLink
                to="/login"
                className={ ({isActive}) =>  `nav-link ${isActive ?'active': ''}`}>
                Login Page
            </NavLink>

        </ul>
    </>
  )
}
