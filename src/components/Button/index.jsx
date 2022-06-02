function Button({ type, text, onClick}) {
    return (
        <button type={type} onClick={onClick}>{text}</button>
    )
} 
export default Button