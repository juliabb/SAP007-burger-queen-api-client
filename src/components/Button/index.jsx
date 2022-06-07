function Button({ type, text, onClick, value, className}) {
    return (
        <button type={type} onClick={onClick} className={className} value={value}>{text}</button>
    )
} 
export default Button