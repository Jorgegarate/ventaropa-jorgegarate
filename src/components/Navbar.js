import CartWidget from "./CartWidget"
const NavBar = () => {
    return (
            <nav className="d-flex">
                <a className="active" href="">boton 1</a>
                <a href="">boton 2</a>
                <a href="">boton 3</a>
                <a href="">boton 4</a>
                <CartWidget />
            </nav>
            


    )
}
export default NavBar