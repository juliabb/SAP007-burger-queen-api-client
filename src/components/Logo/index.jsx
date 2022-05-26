import './logo.css'

 function Imagem({nome, foto}) {
    return(
        <img src={foto} alt={nome} className='logo-hommer' />
    )
} 
export default Imagem