import { Paper, Button } from '@mui/material'
export default function Item(props)
{
    return (
        <Paper>
            <img src={props.item.image} alt="a"/>
            <p>{props.item.title}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}