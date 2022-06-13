// import { FaPlus } from "react-icons/fa";
// import { FaMinus } from "react-icons/fa";
import { useState } from "react";
import "./card.css";

function Card({ product, addItemToCart }) {

    const [count, setCount] = useState(0);

    function addProducts() {
        addItemToCart(product);
        setCount(count + 1);
        // console.log(product);
        localStorage.setItem("count", JSON.stringify(count));
        localStorage.setItem("product", JSON.stringify(product));
    }

    return (
        <div className="card" onClick={addProducts}>
            <ul>
                <li>
                    <p>{product.name}</p>
                    {/* <FaPlus className="right" onClick={callbackParent} /><p className="right">{count}</p>
                    <FaMinus className="right" onClick={removeProducts} /> */}
                    <p className="right">{count}</p>
                    <p>R${(product.price).toFixed(2)}</p>
                    {product.flavor ? <p>{product.flavor}</p> : null}
                </li>
            </ul>
        </div>
    );
}
export default Card;


