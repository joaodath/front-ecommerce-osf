import { TextField, Grid, FormControlLabel, Checkbox, Radio, RadioGroup , Box, Button, Typography} from '@material-ui/core'
import { textAlign } from '@material-ui/system';
import { styled } from '@mui/material/styles';
import React from 'react'

const ebook = true;
const hardCover = false;
const handleSubmit = async(e) =>{
    e.preventDefault();
    // console.log(e.target.tipo.value === 'ebook'? true: false)
    // console.log(e.target.title.value)
    // console.log(e.target.language.value)
    // console.log(e.target.edition.value)
    // console.log(e.target.description.value)
    // console.log(e.target.coverImg.value)
    // console.log(e.target.height.value)
    // console.log(e.target.weight.value)
    // console.log(e.target.length.value)
    // console.log(e.target.weight.value)
    // console.log(typeof +e.target.isbn13.value)
    // console.log(typeof e.target.isbn10.value)
    // console.log(typeof e.target.score.value)
    // console.log(e.target.price.value)
    // console.log(e.target.desconto.checked)
    // console.log(e.target.inventoryAmount.value)
    // console.log(e.target.author.value)
    // console.log(e.target.category.value)
    // console.log(e.target.publisher.value)

    const title=  e.target.title.value;
    const language = e.target.language.value;
    const edition=  +e.target.edition.value;
    const description = e.target.description.value;
    const coverImg= e.target.coverImg.value;
    const ebook = (e.target.tipo.value === 'ebook')? true: false
    const hardCover = (e.target.tipo.value === 'hardCover')? true: false
    const height = +e.target.height.value;
    const width = +e.target.width.value;
    const length = +e.target.length.value;
    const weight = +e.target.weight.value;
    const isbn13 = e.target.isbn13.value;
    const isbn10= e.target.isbn10.value;
    const score = +e.target.score.value;
    const price = +e.target.price.value;
    const discountCheck = e.target.desconto.checked;
    const inventoryAmount = +e.target.inventoryAmount.value
    const author= e.target.author.value;
    const category= e.target.category.value;
    const publisher = e.target.publisher.value;

    const payload = {
        title,
        language,
        edition,
        description,
        coverImg,
        ebook,
        hardCover,
        height,
        width,
        length,
        weight,
        isbn13,
        isbn10,
        score,
        price,
        discountCheck,
        inventoryAmount,
        author,
        category,
        publisher
    }

    const response = await fetch('https://backend-osf-release-0-4-zallyo.herokuapp.com/books/new', {
        method: "POST",
        headers: new Headers({
          "Content-type": "application/json",
        }),
        body: JSON.stringify(payload),
      })

      console.log(response)
  
}
const ButtonCriar = styled(Button)(() =>({
    borderColor: 'black',
    color: 'black',
    marginTop: 133,
    '&:hover': {
        backgroundColor: 'red',
        color: 'white',
        border: 'none'
    }
}))
function CreateBook() {
    return (
        <Box component="form" onSubmit={handleSubmit}>
            <Typography>Cadastro de livros</Typography>
            <Grid container justifyContent="center">
                <Grid Item xs={4} sm={4}>
                    <TextField variant='outlined' label="Título" name="title"  style={{margin: 10,  width: '80%'}}/>
                    <TextField variant='outlined' label="Idioma" name="language" style={{margin: 10,  width: '80%'}}/>
                    <TextField variant='outlined' label="Edição" type='number' name="edition" style={{margin: 10,  width: '80%'}}/>
                    <TextField variant='outlined' label="Descrição" name="description" style={{margin: 10,  width: '80%'}}/>
                    <TextField variant='outlined' label="Capa" name="coverImg" style={{margin: 10,  width: '80%'}}/>
                    <TextField variant='outlined' label="Altura" type='number' name="height" style={{margin: 10,  width: '80%'}}/>
                    <TextField variant='outlined' label="Largura" type='number' name="width" style={{margin: 10,  width: '80%'}}/>
                </Grid>
                <Grid Item xs={4} sm={4}>
                    <TextField variant='outlined' label="Profundidade" type='number' name="length" style={{margin: 10,  width: '80%'}}/>
                    <TextField variant='outlined' label="Peso" type='number' name="weight" style={{margin: 10,  width: '80%'}}/>
                    <TextField variant='outlined' label="ISBN13" type='number' name="isbn13" style={{margin: 10 ,  width: '80%'}}/>
                    <TextField variant='outlined' label="ISBN10" type='number' name="isbn10" style={{margin: 10 ,  width: '80%'}}/>
                    <TextField variant='outlined' label="Avaliação" type='number' name="score" style={{margin: 10 ,  width: '80%'}}/>
                    <TextField variant='outlined' label="Preço" type='number' name="price" style={{margin: 10, width: '80%'}}/>
                    <TextField variant='outlined' label="Quantidade" type='number' name="inventoryAmount" style={{margin: 10, width: '80%'}}/>
                </Grid>
                <Grid Item xs={4} sm={4}>
                    <TextField variant='outlined' label="Autor" name="author" style={{margin: 10, width: '80%'}}/>   
                    <TextField variant='outlined' label="Catergoria" name="category" style={{margin: 10, width: '80%'}}/>
                    <TextField variant='outlined' label="Editora" name="publisher" style={{margin: 10, width: '80%'}}/>
                    <div style={{ display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'flex-start' , width: '80%', paddingLeft: 50}}>
                        <RadioGroup name='tipo'>
                            <FormControlLabel control={<Radio  />}  value="hardCover" label="Capa dura"/>
                            <FormControlLabel control={<Radio />} value="ebook" label="E-book" />
                        </RadioGroup>
                        <FormControlLabel control={<Checkbox  name="desconto" />} label="Desconto"/>
                    </div>
                    <ButtonCriar  variant='outlined' type="submit">
                        CADASTRAR
                    </ButtonCriar>
                </Grid>
            </Grid>
        </Box>
    )
}

export default CreateBook
