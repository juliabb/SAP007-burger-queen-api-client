import { useState, useEffect } from "react";

function MessageError({ msg, type }) {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (!msg) {
            setVisible(false)
            return
        }
        setVisible(true)
        const timer = setTimeout(() => {
            setVisible(false)
        }, 5000)
        return () => clearTimeout(timer)
    }, [msg])
    return (
        <>{visible && (
            <p className={`${msg}${[type]}`}>{msg}</p>
        )}
        </>
    )
}
export default MessageError