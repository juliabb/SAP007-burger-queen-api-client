import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Menu from "../../components/Menu"

import { allProducts } from "../services/data"
import { useEffect, useState } from "react"
import Logout from "../../components/Logout"

function Salon() {

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
        <div>
            <button onClick={() => showAllProducts("breakfast")}>Café</button>
            <button onClick={() => showAllProducts("all-day")}>Lanche</button>

           <Logout />
            <Header />
            <p> Menu: {products.forEach(product => console.log(product))}</p>
            <Menu />
            <Footer />
        </div>
    )
}

export default Salon