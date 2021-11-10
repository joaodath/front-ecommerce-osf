import React from 'react'
import { Box, Typography, Card, CardContent, CardMedia, CardActions, Button} from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
export default function BookCard(props) {

    return (
        <Box
        display="flex"
        flexDirection="column"
        style={{height: '100%', backgroundColor: 'red'}}
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
            </CardContent>
            <CardActions 
                container
                direction="row"
                justify="space-evenly"
                alignItems="stretch"
                spacing={2}
            >
                <Button size="small"><ShareIcon/></Button>
                <Button size="small"><FavoriteBorderIcon/></Button>
            </CardActions>
        </Card>
    </Box>
    )
}
