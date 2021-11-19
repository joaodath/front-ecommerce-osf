import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  lineHeight: '60px',
}));

const Item2 = styled(Button)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'white'
  }));
  

  const Grid2 = styled(Grid)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: 'white',
    width: '30%',
    borderRadius: 10
  }));
  const Grid3 = styled(Grid)(() => ({
    backgroundColor: 'white',
    cursor: 'pointer'
  }));
  const Grid4 = styled(Grid)(() => ({
    backgroundColor: 'white',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  }));
  const Grid5 = styled(Grid)(() => ({
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(175, 1, 0)',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  }));
  const TypographyRed = styled(Typography)(() => ({
    color: 'rgb(175, 1, 0)',
    fontSize: 22,
    fontWeight: '400'
  }));
  const TypographyInfo = styled(Typography)(() => ({
    color: 'rgb(62, 120, 177)',
    fontSize: '14px'
  }));
  const TypographyTitle = styled(Typography)(() => ({
    color: 'black',
    fontSize: 25,
    fontWeight: '400',
    paddingBottom: 5,
    lineHeight: '34px',
    fontWeight: 400
  }));
  const GridInfos = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems:'flex-start',
    justifyContent: 'space-between',
    width: '66.6%'
  }));

  const GridContainer = styled(Grid)(() => ({
    display: 'flex',
    justifyContent: 'flex-end',
    width: '30%'
  }));
  const GridCentral = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  }));
  const Img = styled('img')(() => ({
  }));

export default function DetalheProdutos() {
  const [qtd, setQtd] = React.useState(0);
  const acrescenta1 = () => {
    setQtd(q => q + 1);
  }
  const subtrai1 = () => {
    if( qtd !== 0){
      setQtd(q => q - 1);
    }
  }
  return (
            <Box
              sx={{
                p: 2,
                bgcolor: 'background.default'
              }}
            >
                
                <Item sx={{width: '100vw',
                height: '80vh', margin: '0 auto', display: 'block'}}>
                  <GridCentral container>
                  {/* <Img src="https://img.icons8.com/windows/32/000000/in-transit--v2.png"/> */}
                    <GridContainer>
                      <GridInfos container>
                        <TypographyTitle item>Titulo Aqui</TypographyTitle>
                        <Typography item color='gray'>autor:<TypographyInfo>Fulano</TypographyInfo></Typography>
                        <Typography item color='gray'>editora:<TypographyInfo>Beltrano</TypographyInfo></Typography>
                        <TypographyRed item >R$ 70,00</TypographyRed>
                      </GridInfos>
                    </GridContainer>
                    <Grid2 container>
                      <Grid4 Item xs={2.5}>
                        <Typography color='black'>{qtd}</Typography>
                      </Grid4>
                      <Grid3 Item xs={1.5}>
                        <Typography color='black' onClick={acrescenta1}>+</Typography>
                        <Typography color='black' onClick={subtrai1}>-</Typography>
                      </Grid3>
                      <Grid5 Item xs={8}>
                        <Typography>Comprar</Typography>
                      </Grid5>
                    </Grid2>
                  </GridCentral>
                </Item>
            </Box>
  );
}