import { allProducts } from "../../Pages/services/data"

function Card({ product, onClick }) {

    return (
        <div onClick={onClick}>
            <ul>
                <li><p>Apareceu {product.id}</p></li>
                <li><p>{product.name}</p></li>
                <li><p>R${(product.price).toFixed(2)}</p></li>
                <li>{product.flavor ? <li><p>{product.flavor}</p></li>: null}</li>
            </ul>
        </div>
    )
}
export default Card