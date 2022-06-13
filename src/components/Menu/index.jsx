import { useState, useEffect } from "react";
import Button from "../Button";
import { FaTrashAlt } from "react-icons/fa";
import { allProducts } from "../../Pages/services/data";
import Card from "../Card";
import "./menu.css";

function Menu() {
    const [clientName, setClientName] = useState();
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const showAllProducts = (option) => {
        allProducts()
            .then((response) => response.json())
            .then(json => json)
            .then((data) => { setProducts(data.filter((item) => { return item.type === option; }),); });
    };
    useEffect(() => {
        showAllProducts("breakfast");
    }, []);

    // useEffect(() => {
    // }, [client, table, order]);


    // const chooseProduct = (e) => {
    // 	setProductSelected({
    // 		name: e.target.value,
    // 		price: e.target.getAttribute("price"),
    // 		quantity: 1,
    // 		flavor: e.target.value,
    // 		// complement: null,
    // 	});
    // };

    function sentToKitchen() {
        alert("Pedido enviado para cozinha com sucesso!");
    }

    function clearOrder() { // apagar pedido 
        setClientName("");
        setCart("");
        localStorage.removeItem("count");
        localStorage.removeItem("product");
    }


    const onChangeClient = (e) => { // guarda nome cliente
        const name = e.target.value;
        setClientName(name);
    };



    let product = localStorage.getItem("product"); //pega produto localstorage
    JSON.parse(product);


    function addItemToCart(product) {

        setCart([...cart, product.name, product.price]);
        console.log(product);
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
                            product={product}
                            addItemToCart={addItemToCart}
                        // count={count}
                        />
                    );
                })}
            </section>
            <section className="command">
                <h2 className="center">Pedido Mesa {localStorage.getItem("value")}</h2>
                <input className="clientName" type="text"
                    placeholder="Digite o nome do cliente" maxLength={38} onChange={onChangeClient}
                />
                <div className="card-requests">
                    <p className="left">Nome: {clientName}</p>
                    <p className="space">{cart}</p>

                    <FaTrashAlt className="trash" onClick={clearOrder} />
                </div>
                <Button text="Finalizar" onClick={sentToKitchen} />
            </section>
        </div>
    );
}
export default Menu;