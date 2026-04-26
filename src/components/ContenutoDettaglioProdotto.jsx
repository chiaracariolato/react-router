import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ContenutoDettaglioProdotto = ({ prodotto }) => {
    const navigate = useNavigate();
    const goPrev = () => {
        navigate(`/prodotti/${prodotto.id - 1}`);
    };

    const goNext = () => {
        navigate(`/prodotti/${prodotto.id + 1}`);
    };

    return (
        <div className="container">
            <div className="row m-5 justify-content-end">
                <button type="button" className="btn btn-outline-secondary inline mx-2" onClick={goPrev} disabled={prodotto.id === 1}>Prev</button>
                <button type="button" className="btn btn-outline-secondary inline" onClick={goNext}>Next</button>
            </div>
            <div className="row m-5">
                <h3>{prodotto.title}</h3>
            </div>
            <div className="row m-5">
                <div className="col-6">
                    <img className="prod-img" src={prodotto.image} alt={prodotto.title} />
                </div>
                <div className="col-6">
                    <h5>{prodotto.title}</h5>
                    <span className="badge text-bg-primary">{prodotto.category}</span>
                    <p className="">{prodotto.description}</p>
                    <div>
                        <i className="bi bi-star-fill"></i>
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