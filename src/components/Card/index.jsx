import { useState } from "react";
import "./card.css";

function Card({ product, onClick }) {
    const [count, setCount] = useState(0);


    function handleClick() {
        onClick(product);
        localStorage.setItem("product", product.price);
        setCount(count + 1);
    }


    return (
        <div className="card" onClick={handleClick}>
            <ul>
                <li>
                    <p>{product.name}</p>
                    <p className="right">{count}</p>
                    <p>R${(product.price).toFixed(2)}</p>
                    {product.flavor ? <p>{product.flavor}</p> : null}
                </li>
            </ul>
        </div>
    );
}
export default Card;


