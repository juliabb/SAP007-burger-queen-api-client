function Button({ type, text, onClick, value}) {
    return (
        <button type={type} onClick={onClick} value={value}>{text}</button>
    )
} 
export default Button