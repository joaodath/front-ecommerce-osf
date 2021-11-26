import React, { useState } from 'react'
import BookCard from "../../structure/BookCard/BookCard"
import "./PromoBanner.scss"

function PromoBanner(props) {
    const [promoBooks] = useState(props.promo)
    return (
        <div className="container__promoBanner">
            {promoBooks.map( book => <BookCard key={book.id} book={book}/>)}
        </div>
    )
}

export default PromoBanner
