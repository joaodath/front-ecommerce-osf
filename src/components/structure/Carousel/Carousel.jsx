import React,{useState} from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './Item'

let items = [
    {
        name: "https://opiniaobomvaleapena.com.br/imagens/livro-harry-potter-e-a-crianca-amaldicoada-livro-8-capa-dura.png",
        description: "Probably the most random thing you have ever seen!"
    },
    {
        name: "https://w7.pngwing.com/pngs/790/734/png-transparent-hardcover-book-cover-cover-rectangle-publishing-black.png",
        description: "Hello World!"
    }
]

export default function CarouselComp(props)
{   const [imagens, setImagens] = useState(items);
    return (
        <Carousel >
            {
                imagens.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}
