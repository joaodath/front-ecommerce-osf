import React from "react";
import { MockPromo } from "../../services/mock/mockPromo";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "../../components/shared/CarouselItem/CarouselItem";
import BooksList from "../../components/structure/BooksList/BooksList";
import "./Home.scss";

export function Home() {
  return (
    <div className="container__Home">
      <div className="wrapper___carousel">
        <Carousel autoplay={true} animation="slide" duration="4000" interval="8000">
          {MockPromo.map((item) => (
            <CarouselItem key={`promo_${item.id}`} item={item} />
          ))}
        </Carousel>
      </div>
      <BooksList />
    </div>
  );
}

export default Home;
