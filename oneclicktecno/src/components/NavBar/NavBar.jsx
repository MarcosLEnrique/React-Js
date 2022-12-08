import { NavLink } from "react-router-dom"
import { Cartwidget } from "../Cartwidget.jsx/CartWidget"

const NavBar = () => {
  return (
<>
<NavBar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <NavLink className={({isActive})=> isActive ? 'btn btn-primary': 'btn btn-outline-primary' } to="/">ONECLICKTECNO</NavLink>
        <NavBar.Toggle aria-controls="responsive-navbar-nav" />
        <NavBar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            <NavLink className="btn btn-outline-primary" to="/category/Celulares">Celulares</NavLink>
            <NavLink className="btn btn-outline-primary" to="/category/Celulares">Celulares</NavLink>
        </Nav>
        <Nav>

            <NavLink className="btn btn-outline-primary" to="/cart">
                <Cartwidget/>
            </NavLink>
            </Nav>
    </NavBar.Collapse>
    </Container>
</NavBar>


</>
  )
}

export default NavBar