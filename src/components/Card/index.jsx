import "./card.css"

function Card({products}) {
    return (
        <div className="card">
            {products.map((product) =>(
                <ul key={product.id}>
                    <li>
                    <p>{product.name}</p>
                    <p>R${(product.price).toFixed(2)}</p>
                    {product.flavor ?<p>{product.flavor}</p>: null}
                    </li>
                </ul>
            ))}
        </div>
    )
}
export default Card