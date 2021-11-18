import React,{useState} from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './Item'
import {MockPromo} from '../../../pages/Products/mockPromo'

export default function CarouselComp(props)
{   const [imagens, setImagens] = useState(MockPromo);
    return (
        <Carousel >
            {
                imagens.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}
