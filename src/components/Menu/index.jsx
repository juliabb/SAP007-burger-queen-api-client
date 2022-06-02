import React, { useState } from "react"
import Button from "../Button"
import Requests from "../Requests";
import "./menu.css"

function Menu() {
    const [clientName, setClientName] = useState();

    return (
        <div className="container-menu">
            <section className="menu">
                <nav className="navbar">
                    <Button type="button" text="CAFÉ DA MANHÃ" />
                    <Button type="button" text="ALMOÇO" />
                </nav>
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