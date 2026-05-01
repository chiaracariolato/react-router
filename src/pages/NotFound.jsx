import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="text-center py-5">
            <h1>404</h1>
            <h3>Pagina non trovata</h3>

            <Link to="/" className="btn btn-primary">
                Torna alla home
            </Link>
        </div>
    );
}