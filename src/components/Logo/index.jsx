import './logo.css'

 function Imagem({nome, foto, className}) {
    return(
        <img src={foto} alt={nome} className={className} />
    )
} 
export default Imagem