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
      const data = await fetch('https://backend-osf-release-0-2-i5xlpw.herokuapp.com/books/id/12')
      const book = await data.json();
      setLivro(book);
    }
    obtemLivro()
  },[])

  function createData(nome, descricao) {
    return { nome, descricao};
  }
  
  const rows = 
    Object.keys(livro).map((i) => {
      if (i === 'title'){
        createData('Titulo', livro[i])
      } //else if(i === 'edition'){
      //   return createData('Edição', livro[i])
      // }
    });
    
    if(livro){
      console.log(rows)
    }
  
  return (
    <Box sx={{
      p: 2,
      bgcolor: 'background.default',
      display: 'block',
      margin: 'auto'
    }}>
      <TableContainer component={Paper}>
        <Table sx={{ width: '80vw' , height: '100vh', display: 'block', margin: '0 auto'}} aria-label="customized table">
            <TableHead>
            <StyledTableRow>
                  <StyledTableCell  variant='head' align="center" colSpan={2} component="th" scope="row">Ficha técnica</StyledTableCell>
            </StyledTableRow>
            </TableHead>
          <TableBody>
            {rows.map(row => (
              <StyledTableRow key={row.nome}>
                <StyledTableCell colSpan={3} component="tr" scope="row">{row.nome}</StyledTableCell>
                <StyledTableCell colSpan={3} align="left">{row.descricao}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
