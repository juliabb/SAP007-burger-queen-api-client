import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LinkButton from "../../components/Linkbutton";
import Imagem from "../../components/Logo";
import homer from "../../Pages/Style/Images/homer.png";
import "../Login/login-page.css";
import "./home-page.css";

function Home() {
    return (
        <div>
            <LinkButton />
            <Header />
            <div className="container-home">
                <div className="main-home">
                    <Imagem />
                    <Link to="/tables" className="salon button-home">Novo Pedido</Link>
                    <Link to="/kitchen" className="kitchen button-home">Pedidos Pendentes</Link>
                    <Link to="/salon" className="salon button-home">Pedidos Entregues</Link>
                </div>
                <Imagem nome="homer-buguer" foto={homer} className="homerburguer" />
            </div>
            <Footer />
        </div>
    );
}
export default Home;         