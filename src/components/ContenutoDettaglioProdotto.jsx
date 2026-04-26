import { Link } from "react-router-dom";

const ContenutoDettaglioProdotto = ({ prodotto }) => {
    return (
        <div className="container">
            <div className="row m-5">
                <h3>{prodotto.title}</h3>
            </div>
            <div className="row m-5">
                <div className="col-6">
                    <img className="prod-img" src={prodotto.image} alt={prodotto.title} />
                </div>
                <div className="col-6">
                    <h5>{prodotto.title}</h5>
                    <span class="badge text-bg-primary">{prodotto.category}</span>
                    <p className="">{prodotto.description}</p>
                    <div>
                        <i class="bi bi-star-fill"></i>
                        <p className="fw-bolder d-inline px-2 h3">{prodotto.rating.rate}</p>
                        <p className="d-inline">{prodotto.rating.count} ratings</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <Link to="/prodotti" className="btn btn-secondary"> Torna alla lista </Link>
            </div>
        </div>
    )
}

export default ContenutoDettaglioProdotto;