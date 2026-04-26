import ProductCard from '.././components/ProductCard'

export default function Prodotti(props) {
    const { prodotti } = props;

    return (
        <div className="card-list container m-3">
            <div className="row justify-content-center g-3">
                {prodotti.map((prodotto) => (
                    <ProductCard prodotto={prodotto} />
                ))}
            </div>

        </div>
    );
}