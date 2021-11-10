import React, {useState}from 'react'
import { Box, Typography, Card, CardContent, CardMedia, CardActions, Button} from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
export default function BookCard(props) {
    const [isFavorite, setIsFavorite] = useState(false)
    const favoritar = () => {
        if(!isFavorite){
            setIsFavorite(true)
        }else{
            setIsFavorite(false)
        }
    }
    return (
        <Box
        display="flex"
        flexDirection="column"
        style={{height: '100%', backgroundColor: 'gray'}}
    >
        <Card sx={{ maxWidth: 360 }}>
            <CardMedia
                component="img"
                alt={props.data.title}
                height="140"
                image={props.data.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {props.data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {props.data.price}
                </Typography>
                <CardActions >
                    <Button size="small"><ShareIcon/></Button>
                    <Button size="small" onClick={favoritar}>{isFavorite? <FavoriteIcon/>:<FavoriteBorderIcon/>}</Button>
                </CardActions>
            </CardContent>
            
        </Card>
    </Box>
    )
}
