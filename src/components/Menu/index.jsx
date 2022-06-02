import React, { useState, useEffect } from "react"
import Button from "../Button"
import Requests from "../Requests";
import "./menu.css"
import { allProducts } from "../../Pages/services/data";

function Menu() {
    const [clientName, setClientName] = useState();
    const [products, setProducts] = useState([])

    const showAllProducts = (option) => {
        allProducts()
            .then((response) => response.json())
            .then(json => json)
            .then((data) => { setProducts(data.filter((item) => { return item.type === option }),); });
        // console.log(showAllProducts);
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
                <p> Menu: {products.forEach(product => console.log(product))}</p>
            </section>

            <section className="command">
                <h2 className="center">Pedido Mesa X</h2>
                <input className="clientName" type="text"
                    placeholder="Digite o nome do cliente"
                    onChange={e => setClientName(e.target.value)}
                />
                <Requests name={clientName} />
                <Button text="Enviar" />

            </section>
        </div>
    )
}

export default Menu