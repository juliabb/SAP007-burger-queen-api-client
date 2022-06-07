import "./request.css";

function Requests({name, time}) {

    return (
        <div className="card-requests">
            <p className="left">Nome: {name}</p>
            <small className="left">{time}</small>
        </div>
    );
}

export default Requests;