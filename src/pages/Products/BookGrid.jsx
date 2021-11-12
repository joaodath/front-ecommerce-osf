import React, {useEffect, useState} from 'react'
import {Container, Grid} from '@mui/material'
import BookCard from '../../components/structure/BookCard/BookCard'

export default function BookGrid() {
    const [imagens, setImagens] = useState([])
    const [isMouseCima, setIsMouseCima] = useState(false)
    useEffect(() =>{
        const produtos = async() =>{
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json()
            console.log(data)
            setImagens(data)
        }
        produtos()
    },[])
    const apareceBotao = () =>{
        !isMouseCima? setIsMouseCima(true): setIsMouseCima(false)
    }
    return (
        <Container  maxWidth="xl">
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="stretch"
                spacing={2}
            >
        {
            imagens.map(data => (
                <Grid item
                      key={`GridItem-${data.id}`} xs={12} sm={5} md={4} lg={2} xl={1}
                >  
                    <div onMouseOver={apareceBotao}>
                        <BookCard data={data} mouse={isMouseCima}/>
                    </div>
                </Grid>
            ))
        }
    </Grid>
</Container>

    )
}
