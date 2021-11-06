import React from 'react'
import './ProductBody.css'
import {Carousel, Card, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
function ProductBody() {
    return (
        <section className="white-bg">
            <center>
                <p> Livros em lançamento </p>
                <Carousel className="Carousel" style={{height: '20rem'}}>
                    <Carousel.Item>
                            <Card style={{ width: '18rem'}}>
                                <Card.Img  xs={6} md={4} variant="top" src="https://w7.pngwing.com/pngs/790/734/png-transparent-hardcover-book-cover-cover-rectangle-publishing-black.png" />
                                <Card.Body>
                                    <Card.Title>Livro </Card.Title>
                                    <Card.Text>
                                        Descrição do livro
                                    </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                            <Card style={{ width: '18rem'}}>
                                <Card.Img variant="top" src="https://w7.pngwing.com/pngs/790/734/png-transparent-hardcover-book-cover-cover-rectangle-publishing-black.png" />
                                <Card.Body>
                                    <Card.Title>Livro </Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                            <Card style={{ width: '18rem'}}>
                                <Card.Img variant="top" src="https://w7.pngwing.com/pngs/790/734/png-transparent-hardcover-book-cover-cover-rectangle-publishing-black.png" />
                                <Card.Body>
                                    <Card.Title>Livro </Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                    </Carousel.Item>
                </Carousel>
            </center>
        </section>
        
    )
}

export default ProductBody
