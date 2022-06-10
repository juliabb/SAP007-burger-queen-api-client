import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";
import "./card.css";

function Card({ product }) {
    const [count, setCount] = useState(0);

    function addProducts() {
        setCount(count + 1);
    }

    function removeProducts() {
        setCount(count - 1);
    }

    return (
        <div className="card">
            <ul>
                <li>
                    <p>{product.name}</p>
                    <FaPlus className="right" onClick={addProducts} /><p className="right">{count}</p>
                    <FaMinus className="right" onClick={removeProducts} />
                    <p>R${(product.price).toFixed(2)}</p>
                    {product.flavor ? <p>{product.flavor}</p> : null}
                </li>
            </ul>
        </div>
    );
}
export default Card;


