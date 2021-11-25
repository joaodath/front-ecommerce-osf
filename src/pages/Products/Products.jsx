import React from 'react'
import './Products.css'
import CarouselComp from '../../components/structure/Carousel/Carousel'
import BookInfo from '../../components/structure/BookInfo/BookInfo'
import BookDetails from '../../components/structure/BookInfo/BookDetails'
import BookGrid from './BookGrid'
import {Grid} from "@material-ui/core"
import { makeStyles } from '@material-ui/styles';
import DetalheProdutos from './ProductsComponents/DetalheProdutos'
import CreateBook from './CreateBook'


const useStyles = makeStyles({
    root:{
        background: 'transparent',
        borderRadius: 10,
        color: 'red',
        '& p': {
            color: 'white'
        },
        '& button':{
            visibility: 'hidden'
        },
        '& .MuiPaper-root':{
            background: 'transparent',
            height: 500
        },
        '& img': {
            maxWidth: '100%',
            width: 500,
            height: 500,
            objectFit: 'fill',
            padding: 50
        }
    }
})
function Products() {
    const classes = useStyles()
    return (
            // <Grid justifyContent>
            //     <CarouselComp className={classes.root}/>
            //     <BookGrid/>
            //     <BookInfo/>
            //     <BookDetails/>
            //     <DetalheProdutos/>
            // </Grid>
            <CreateBook/>
    )
}

export default Products
