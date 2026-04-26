import axios from "axios";
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import ContenutoDettaglioProdotto from '.././components/ContenutoDettaglioProdotto'

const DettaglioProdotto = () => {
    const { id } = useParams();

    const [prodotto, setProdotto] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(({ data }) => setProdotto(data))
            .catch(() => { navigate('/prodotti') })
    }, [id, navigate])

    return (
        <div className="container">
            {
                prodotto ? (
                    <ContenutoDettaglioProdotto prodotto={prodotto} />
                ) :
                    (
                        <div className="loader-container">
                            <div className="lds-dual-ring"></div>
                        </div>
                    )
            }
        </div>
    )
}

export default DettaglioProdotto;