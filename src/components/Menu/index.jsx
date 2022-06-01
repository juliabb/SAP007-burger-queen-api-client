import Requests from "../Requests"
import "./menu.css"

function Menu() {
    return (
        <div className="container-menu">
            <section className="menu">
                <nav className="navbar">
                    <a href="#">CAFÉ</a>
                    <a href="#">LANCHE</a>
                </nav>
            </section>
            <section className="menu">
                <h2 className="center">Pedido</h2>
                <Requests />
            </section>
        </div>
    )
}

export default Menu