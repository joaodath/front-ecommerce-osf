import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize:20
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function BookInfo() {
    const [livro, setLivro] = React.useState({})
    const [linha, setLinha] = React.useState([])
  React.useEffect(()=>{
    const obtemLivro = async() =>{
      const data = await fetch('https://backend-osf-release-0-3-h28izb.herokuapp.com/books/id/1')
      const book = await data.json();
      setLivro(book);
    }
    obtemLivro()
  },[])
    
  return (
    <Box sx={{
      p: 2,
      bgcolor: 'background.default',
      display: 'block',
      margin: '0 auto',
      width: '80vw'
    }}>
      <TableContainer component={Paper}>
        <Table sx={{ width: '100%' , height: '100vh'}} aria-label="customized table">
            <TableHead>
            <StyledTableRow>
                  <StyledTableCell  variant='head' align="center" colSpan={2} component="th" scope="row">Ficha técnica</StyledTableCell>
            </StyledTableRow>
            </TableHead>
          <TableBody>
              <StyledTableRow >
                <StyledTableCell colSpan={3} component="tr" scope="row">Autor</StyledTableCell>
                <StyledTableCell colSpan={3} align="left">{livro.author}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow >
                <StyledTableCell colSpan={3} component="tr" scope="row">ISBN</StyledTableCell>
                <StyledTableCell colSpan={3} align="left">{livro.isbn13}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow >
                <StyledTableCell colSpan={3} component="tr" scope="row">Título</StyledTableCell>
                <StyledTableCell colSpan={3} align="left">{livro.title}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow >
                <StyledTableCell colSpan={3} component="tr" scope="row">Editora</StyledTableCell>
                <StyledTableCell colSpan={3} align="left">{livro.publisher}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow >
                <StyledTableCell colSpan={3} component="tr" scope="row">Edição</StyledTableCell>
                <StyledTableCell colSpan={3} align="left">{livro.edition}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow >
                <StyledTableCell colSpan={3} component="tr" scope="row">Peso</StyledTableCell>
                <StyledTableCell colSpan={3} align="left">{livro.weight}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow >
                <StyledTableCell colSpan={3} component="tr" scope="row">Largura</StyledTableCell>
                <StyledTableCell colSpan={3} align="left">{livro.weight}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow >
                <StyledTableCell colSpan={3} component="tr" scope="row">Profundidade</StyledTableCell>
                <StyledTableCell colSpan={3} align="left">{livro.length}</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow >
                <StyledTableCell colSpan={3} component="tr" scope="row">Avaliação</StyledTableCell>
                <StyledTableCell colSpan={3} align="left">{livro.score}</StyledTableCell>
              </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
