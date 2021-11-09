import { Paper, Button } from '@mui/material'
export default function Item(props)
{
    return (
        <Paper>
            <img src={props.item.name} alt="a"/>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}