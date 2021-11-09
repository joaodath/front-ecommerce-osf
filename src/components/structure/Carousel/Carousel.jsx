import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './Item'

export default function CarouselComp(props)
{
    var items = [
        {
            name: "https://w7.pngwing.com/pngs/790/734/png-transparent-hardcover-book-cover-cover-rectangle-publishing-black.png",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "https://w7.pngwing.com/pngs/790/734/png-transparent-hardcover-book-cover-cover-rectangle-publishing-black.png",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}
