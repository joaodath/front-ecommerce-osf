import React from 'react'
import { Link } from 'react-router-dom'
import './Products.css'
import Searchbar from '../../components/structure/Searchbar/Searchbar'
import CarouselComp from '../../components/structure/Carousel/Carousel'
import BookInfo from '../../components/structure/BookInfo/BookInfo'
import BookGrid from './BookGrid'
import {Grid} from "@material-ui/core"
import { makeStyles } from '@material-ui/styles';
import { height } from '@material-ui/system'
import DetalheProdutos from './ProductsComponents/DetalheProdutos'


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
            <Grid justifyContent>
                <CarouselComp className={classes.root}/>
                <BookGrid/>
                <BookInfo/>
                <DetalheProdutos/>
            </Grid>
    )
}

export default Products
