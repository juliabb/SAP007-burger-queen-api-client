import Button from "../../components/Button"
import LinkButton from "../../components/Linkbutton"
import Header from "../../components/Header"
import "./tables.css"
import { useNavigate } from "react-router-dom";


// function numberTable(e) {
//     const value =  e 
//         console.log(value)
//     }

function Tables() {
    const navigate = useNavigate()

    function numberTable(e) {
        const value =  e.target.value 
            console.log(value)
            navigate("/salon");
            localStorage.setItem('value', value);
        }

    return (
        <div>
            <LinkButton />
            <Header />
            <div className="table">
                <Button type="button" onClick={numberTable} value="1" text="Mesa 1" />
                <Button type="button" onClick={numberTable} value="2" text="Mesa 2" />
                <Button type="button" onClick={numberTable} value="3" text="Mesa 3" />
                <Button type="button" onClick={numberTable} value="4" text="Mesa 4" />
                <Button type="button" onClick={numberTable} value="5" text="Mesa 5" />
                <Button type="button" onClick={numberTable} value="6" text="Mesa 6" />
            </div>
        </div>
    )
}

export default Tables