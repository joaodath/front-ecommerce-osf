import React from 'react'
import { MockPromo } from '../../services/mock/mockPromo'
import Carousel from 'react-material-ui-carousel'
import CarouselItem from '../../components/shared/CarouselItem/CarouselItem'
import BooksList from '../../components/structure/BooksList/BooksList'
import "./Home.scss"

function Home() {
    return (
        <div className="container__Home">
            <Carousel autoplay={true} animation="slide" duration="1200">
            {
                MockPromo.map( (item) => <CarouselItem key={`promo_${item.id}`} item={item} /> )
            }
            </Carousel>

            <BooksList/>
        </div>
    )
}

export default Home
