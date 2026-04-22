export default function Prodotti(props) {
    const { prodotti } = props;

    return (
        <div className="card-list">
            {prodotti.map((prodotto) => (
                <div key={prodotto.id} className="card" style={{ width: "18rem" }}>
                    <img
                        className="card-img-top"
                        src={prodotto.image}
                        alt={prodotto.title}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{prodotto.title}</h5>
                        <p className="card-text">{prodotto.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}