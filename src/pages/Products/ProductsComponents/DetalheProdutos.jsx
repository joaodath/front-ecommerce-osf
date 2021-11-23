import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { TextField} from '@mui/material';
import { styled } from '@mui/material/styles';

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
    width: '100%',
    borderRadius: 10
  }));
  const Grid3 = styled(Grid)(() => ({
    backgroundColor: 'white',
    cursor: 'pointer',
    border: '1px solid gray'
  }));
  const Grid4 = styled(Grid)(() => ({
    backgroundColor: 'white',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px 0 0 10px',
    border: '1px solid gray'
  }));
  const ButtonComprar = styled(Button)(() => ({
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    width: '66.6%',
    borderColor: 'black',
    borderRadius: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    '&:hover':{
      color: 'white',
      backgroundColor: 'rgb(175, 1, 0)',
      border: 'none'
    }
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
    width: '100%'
  }));
  const GridCentral = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  }));
  const Img = styled('img')(() => ({
    maxHeight: '100vh',
    width: 'auto'
  }));

  const TextFieldFrete = styled(TextField)(() => ({
      padding: '0 0 0 0 ',
  }));

  const TypographyFrete = styled(Typography)(() => ({
    fontSize: '13px',
}));

  const ContainerFrete = styled('div')(() =>({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '12%',
    marginTop: '4%'
  }))
  const ButtonOk = styled(Button)(()=>({
    borderColor: 'black',
    borderRadius: 5,
    color: 'black',
    padding: '15px',
    marginLeft: 10,
    '&:hover': {
      backgroundColor: 'rgb(175, 1, 0)',
      color: 'white',
      border: 'none'
    }
  }))

  const ConteinerPrincipal = styled('div')(()=>({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    widht: '100%',
    height: '100%',
  }))
  const ContainerImg = styled('div')(()=>({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // widht: '100%',
    // height: '100%',
    marginRight: 100
  }))

export default function DetalheProdutos() {
  const [qtd, setQtd] = React.useState(0);
  const [livro, setLivro] = React.useState({})
  const [cep, setCep] = React.useState('')
  const acrescenta1 = () => {
    setQtd(q => q + 1);
  }
  const subtrai1 = () => {
    if( qtd !== 0){
      setQtd(q => q - 1);
    }
  }
  React.useEffect(()=>{
    const obtemLivro = async() =>{
      const data = await fetch('https://backend-osf-release-0-3-h28izb.herokuapp.com/books/id/1')
      const book = await data.json();
      setLivro(book);
    }
    obtemLivro()
  },[])
  return (
            <Box
              sx={{
                p: 2,
                bgcolor: 'background.default'
              }}
            >
                
                <Item sx={{width: '100vw',
                height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                  <ConteinerPrincipal>
                    <ContainerImg>
                      <Img src={livro.coverImg}/>
                    </ContainerImg>
                    <GridCentral>
                      <GridContainer item >
                        <GridInfos container>
                          <TypographyTitle item>{livro.title}</TypographyTitle>
                          <Typography item color='gray'>autor:<TypographyInfo>Fulano</TypographyInfo></Typography>
                          <Typography item color='gray'>editora:<TypographyInfo>Beltrano</TypographyInfo></Typography>
                          <TypographyRed item >R$ {livro.price},00</TypographyRed>
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
                        <ButtonComprar variant='outlined' Item xs={8}>
                            Comprar
                        </ButtonComprar>
                      </Grid2>
                      <Divider/>
                      <ContainerFrete>
                          <Img src="https://img.icons8.com/windows/32/000000/in-transit--v2.png"/>
                          <TypographyFrete>Calcular frete:</TypographyFrete>
                          <form>
                            <TextFieldFrete variant='outlined' type='number'/>
                            <ButtonOk variant='outlined' type="submit">Ok</ButtonOk>
                          </form>
                      </ContainerFrete>
                    </GridCentral>
                  </ConteinerPrincipal>
                </Item>
            </Box>
  );
}