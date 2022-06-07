import React, { useState, useEffect } from "react"
import Button from "../Button"
import Requests from "../Requests";
import "./menu.css"
import { allProducts } from "../../Pages/services/data";
import Card from "../Card";

function Menu() {
    const [clientName, setClientName] = useState();
    const [products, setProducts] = useState([])

    const showAllProducts = (option) => {
        allProducts()
            .then((response) => response.json())
            .then(json => json)
            .then((data) => { setProducts(data.filter((item) => { return item.type === option }),); });
    };
    useEffect(() => {
        showAllProducts("breakfast")
    }, [])

    return (
        <div className="container-menu">
            <section className="menu">
                <nav className="navbar">
                    <Button type="button" text="CAFÉ DA MANHÃ" onClick={() => showAllProducts("breakfast")} />
                    <Button type="button" text="ALMOÇO" onClick={() => showAllProducts("all-day")} />
                </nav>
                <Card products={products} />
            </section>
            <section className="command">
                <h2 className="center">Pedido Mesa {localStorage.getItem("value")}</h2>
                <input className="clientName" type="text"
                    placeholder="Digite o nome do cliente" maxLength={38} onChange={e => setClientName(e.target.value)}
                />
                <Requests name={clientName} />
                <Button text="Enviar" />
            </section>
        </div>
    )
}

export default Menu