import React, {useEffect,useState} from 'react'
import './BookDetails.scss'
import {Api} from './../../Api/Api'

const BookDetails = (props) => {
    const {id} = props.match.params;
    const [book, setBook] = useState({});
    
    useEffect(()=>{
    const loadBook = async ()=>{
        const response = await Api.buildApiGetRequest(Api.readBookByIdUrl(id),true);
        const data = await response.json();
        setBook(data);
    }
    loadBook();
    },[])
    return (
        <div className="">
            <section className=" detail-container detail-container__header">
                <img src={book.coverImg} alt="" />
                <div className="header-info">
                    <h2>{book.title}</h2>
                    <p>Autor:<span className="blue">FIXO</span></p>
                    <p>Editora:<span className="blue">FIXO</span></p>
                    <h1>{`R$${book.price}`}</h1>
                    <button>Comprar</button>
                </div>
            </section>
            <section className="detail-container detail-container__sinopsis">
                <h2>Sinopse</h2>
                <p>{book.description}</p>
            </section>
            <section>
                <h2>Ficha Técnica</h2>
                <ul>
                    <li>Autor</li>
                    <li>ISBN13 {book.isbn13}</li>
                    <li>ISBN10 {book.isbn10}</li>
                    <li>Título {book.title}</li>
                    <li>Editora </li>
                    <li>Ano de Edição</li>
                    <li>Idioma</li>
                    <li>Número de Páginas</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </section>
        </div>
    )
}

export default BookDetails
