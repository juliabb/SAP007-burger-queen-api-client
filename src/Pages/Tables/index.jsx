import Button from "../../components/Button";
import LinkButton from "../../components/Linkbutton";
import Header from "../../components/Header";
import "./tables.css";
import { useNavigate } from "react-router-dom";


// function numberTable(e) {
//     const value =  e 
//         console.log(value)
//     }

function Tables() {
    const navigate = useNavigate();

    function numberTable(e) {
        const value = e.target.value;
        console.log(value);
        navigate("/salon");
        localStorage.setItem("value", value);
    }

    return (
        <div>
            <LinkButton />
            <Header />
            <h1 className="ordertable">Escolha a mesa para realizar o pedido</h1>
            <div className="tables">
                <section className="table">
                    <Button type="button" onClick={numberTable} value="1" text="Mesa 1" className="btn"/>
                    <Button type="button" onClick={numberTable} value="2" text="Mesa 2" className="btn"/>
                    <Button type="button" onClick={numberTable} value="3" text="Mesa 3" className="btn"/>
                </section>
                <section className="table">
                    <Button type="button" onClick={numberTable} value="4" text="Mesa 4" className="btn"/>
                    <Button type="button" onClick={numberTable} value="5" text="Mesa 5" className="btn"/>
                    <Button type="button" onClick={numberTable} value="6" text="Mesa 6" className="btn"/>
                </section>
            </div>
        </div>
    );
}

export default Tables;