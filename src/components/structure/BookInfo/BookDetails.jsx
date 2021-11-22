import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    lineHeight: '60px',
  }));

export default function BookDetails() {
    const [livro, setLivro] = React.useState({})
    React.useEffect(()=>{
        const obtemLivro = async() =>{
          const data = await fetch('https://backend-osf-release-0-3-h28izb.herokuapp.com/books/id/1')
          const book = await data.json();
          console.log(book)
          setLivro(book);
        }
        obtemLivro()
      },[])
    return (
        <Box sx={{
            p: 2,
            bgcolor: 'background.default',
            display: 'block',
            margin: 'auto'
          }}>
            <Item>
                <Typography color='black'>Descrição</Typography>
                <Typography>{livro.description}</Typography>
            </Item>
        </Box>
    )
}
