import "./card.css"

function Card({products}) {
    return (
        <div className="card">
            {products.map((product) =>(
                <ul key={product.id}>
                    <li ><p>{product.name}</p></li>
                    <li ><p>R${(product.price).toFixed(2)}</p></li>
                    <li >{product.flavor ? <li><p>{product.flavor}</p></li>: null}</li>
                </ul>
            ))}
        </div>
    )
}
export default Card