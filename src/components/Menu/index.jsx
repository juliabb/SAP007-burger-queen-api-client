import { useState, useEffect } from "react";
import Button from "../Button";
import { FaTrashAlt } from "react-icons/fa";
import { allProducts } from "../../Pages/services/data";
import Card from "../Card";
import "./menu.css";

function Menu() {
    const [clientName, setClientName] = useState();
    const [products, setProducts] = useState([]);
    const [card, setCard] = useState();

    const showAllProducts = (option) => {
        allProducts()
            .then((response) => response.json())
            .then(json => json)
            .then((data) => { setProducts(data.filter((item) => { return item.type === option; }),); });
    };
    useEffect(() => {
        showAllProducts("breakfast");
    }, []);


    function sentToKitchen() {
        alert("Pedido enviado para cozinha com sucesso!");
    }

    function clearOrder() { // apagar pedido
        setClientName("");
        setCard("");
    }

    return (
        <div className="container-menu">
            <section className="menu">
                <nav className="navbar">
                    <Button type="button" text="CAFÉ DA MANHÃ" onClick={() => showAllProducts("breakfast")} />
                    <Button type="button" text="ALMOÇO" onClick={() => showAllProducts("all-day")} />
                </nav>
                {products.map((product) => {
                    return (
                        <Card key={product.id}
                        product={product} />
                    );
                    })}
            </section>
            <section className="command">
                <h2 className="center">Pedido Mesa {localStorage.getItem("value")}</h2>
                <input className="clientName" type="text"
                    placeholder="Digite o nome do cliente" maxLength={38} onChange={e => setClientName(e.target.value)}
                />
                <div className="card-requests">
                    <p className="left">Nome: {clientName}</p>
                    <p>{card}</p>
                    <FaTrashAlt className="trash" onClick={clearOrder} />
                </div>
                <Button text="Finalizar" onClick={sentToKitchen} />
            </section>
        </div>
    );
}
export default Menu;