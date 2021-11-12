import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

function createData(nome, descricao) {
  return { nome, descricao};
}

const rows = [
  createData('Autor', 'Token'),
  createData('ISBN', 237569054998954),
  createData('Título', 'O senhor dos anéis'),
  createData('Editor', 'Best Seler'),
  createData('Idioma', 'Inglês'),
];

export default function BookInfo() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 , maxHeight: 100 }} aria-label="customized table">
          <TableHead>
          <StyledTableRow>
                <StyledTableCell  variant='head' align="center" colSpan={2} component="th" scope="row">Ficha técnica</StyledTableCell>
          </StyledTableRow>
          </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.nome}>
              <StyledTableCell component="th" scope="row">
                {row.nome}
              </StyledTableCell>
              <StyledTableCell colSpan={3} align="left">{row.descricao}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
