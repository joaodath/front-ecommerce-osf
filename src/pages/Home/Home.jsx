import React, { useEffect, useState } from "react";
import { MockPromo } from "../../services/mock/mockPromo";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "../../components/shared/CarouselItem/CarouselItem";
import "./Home.scss";
import PromoBanner from "../../components/shared/PromoBanner/PromoBanner";
import { Api } from "../../Api/Api";
import { CircularProgress } from "@mui/material"
import { Link } from "react-router-dom";

export function Home() {
  const [promo1, setPromo1] = useState();
  const [promo2, setPromo2] = useState();

  useEffect(() => {
    const loadPromo1 = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readBooksByAuthorUrl("J.K. Rowling"),
        false
      );
      const result = await response.json();
      setPromo1(result[0].books);
      console.log(result);
    };

    const loadPromo2 = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readBooksByAuthorUrl("JRR Tolkien"),
        false
      );
      const result = await response.json();
      setPromo2(result[0].books);
      console.log(result);
    };

    loadPromo1();
    loadPromo2();
  }, []);

  if (!promo1 || !promo2) {
    return (
      <div style={{ minHeight: "100vh" }}>
        <div><CircularProgress/></div>
      </div>
    );
  }

  return (
    <div className="container__Home">
      <div className="wrapper__carousel">
        <Carousel
          autoplay={true}
          animation="slide"
          duration="1500"
          interval="8000"
        >
          {MockPromo.map((item) => (
            <CarouselItem key={`promo_${item.id}`} item={item} />
          ))}
        </Carousel>
      </div>
      <div className="wrapper__promo">
        <div className="wrapper__text-info">
          <h3>Coleção Hogwarts</h3>
          <p>
            Confira os sete livros que se tornaram o maior fenômeno editorial de
            todos os tempos, com mais de 450 milhões de exemplares vendidos e
            traduções em 78 idiomas, Harry Potter não é exposto apenas a
            batalhas e feitiços. Ele precisa superar traições, surpresas e,
            sobretudo, aprender a lidar com os próprios sentimentos. O amor, a
            amizade e claro, uma boa dose de magia e imaginação, são os
            elementos-chave para da maior saga bruxa de todos os tempos.
          </p>
        </div>
        <PromoBanner promo={promo1} />
      </div>
      <div className="wrapper__promo">
        <div className="wrapper__text-info">
          <h3>Especial Tolkien</h3>
          <p>
            Apesar de ter sido publicado em três volumes – A Sociedade do Anel,
            As Duas Torres e O Retorno do Rei – desde os anos 1950, O Senhor dos
            Anéis não é exatamente uma trilogia, mas um único grande romance que
            só pode ser compreendido em seu conjunto, segundo a concepção de seu
            autor, J.R.R. Tolkien.
          </p>
          <p>
            Mergulhe no mundo da Terra-Média com estas incríveis edições de
            Luxo.
          </p>
        </div>
        <PromoBanner promo={promo2} />
      </div>
    </div>
  );
}

export default Home;
