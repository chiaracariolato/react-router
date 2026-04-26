import { Link } from "react-router-dom";

export default function ProductCard(props) {
    const { prodotto } = props;

    return (
        <div key={prodotto.id} className="card mx-2" style={{ width: "18rem" }}>
            <img className="card-img-top" src={prodotto.image} alt={prodotto.title} />
            <div className="card-body">
                <h5 className="card-title">{prodotto.title}</h5>
                <p className="card-text">{prodotto.description}</p>
                <Link to={`/prodotti/${prodotto.id}`} className="btn btn-secondary"> Dettagli </Link>
            </div>
        </div>
    );
}