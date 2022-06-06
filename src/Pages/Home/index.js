import { Link } from "react-router-dom"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import LinkButton from "../../components/Linkbutton"
import '../Login/login-page.css'
import './home-page.css'

function Home() {
    return (
        <div>
            <LinkButton />
            <Header />
           <div className="container">
           <Link to="/salon" className="salon button">Novo Pedido</Link>
           <Link to="/kitchen" className="kitchen button">Pedidos Pendentes</Link>
           <Link to="/salon" className="salon button">Pedidos Entregues</Link>
           </div>
            <Footer />
        </div>
    )
}
export default Home         