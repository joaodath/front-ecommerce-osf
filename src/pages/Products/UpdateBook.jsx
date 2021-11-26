import { TextField, Grid, FormControlLabel, Checkbox, Radio, RadioGroup , Box, Button, Typography, Paper} from '@material-ui/core'
import { styled } from '@mui/material/styles';
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'


const handleSubmit = async(e) =>{
    e.preventDefault();
    console.log(e.target.tipo.value === 'ebook'? true: false)
    console.log(e.target.title.value)
    console.log(e.target.language.value)
    console.log(e.target.edition.value)
    console.log(e.target.description.value)
    console.log(e.target.coverImg.value)
    console.log(e.target.height.value)
    console.log(e.target.weight.value)
    console.log(e.target.length.value)
    console.log(e.target.weight.value)
    console.log(typeof +e.target.isbn13.value)
    console.log(typeof e.target.isbn10.value)
    console.log(typeof e.target.score.value)
    console.log(e.target.price.value)
    console.log(e.target.desconto.checked)
    console.log(e.target.inventoryAmount.value)
    console.log(e.target.author.value)
    console.log(e.target.category.value)
    console.log(e.target.publisher.value)

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
    const author=  e.target.author.value;
    const category=  e.target.category.value;
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

    const response = await fetch('https://backend-osf-release-0-4-zallyo.herokuapp.com/books/8', {
        method: "PATCH",
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
    padding: '10 30',
    '&:hover': {
        backgroundColor: 'red',
        color: 'white',
        border: 'none'
    }
}))

const ButtonVoltar = styled(Button)(() =>({
    borderColor: 'black',
    color: 'black',
    padding: '0 20',
    '&:hover': {
        backgroundColor: '#0000ff',
        color: 'white',
        border: 'none'
    }
}))
function UpdateBook() {
    const [book, setbook] = useState({})

    useEffect(() => {
        const bookData = async() =>{
            const response = await fetch("https://backend-osf-release-0-4-zallyo.herokuapp.com/books/id/1")
            const data = await response.json()
            setbook(data);
            console.log(book.coverImg)
        }
        bookData()
    }, [])
    return (
        <Paper elevation={3} square={false} xs={{display: 'flex', justifyContent: 'center', width: '100vw'}}>
            <Box component="form" onSubmit={handleSubmit} sx={{
                width: '90%',
                display: 'block',
                margin: '0 auto',
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off">
                <Typography>Atualização de livros</Typography>
                <Grid container justifyContent="center">
                    <Grid Item xs={4} sm={4}>
                        <TextField required id="outlined-required" variant='outlined' label="Título" name="title" defaultValue={book.title} style={{margin: 10,  width: '80%'}}/>
                        <TextField required variant='outlined' label="Idioma" name="language" defaultValue={book.language} style={{margin: 10,  width: '80%'}}/>
                        <TextField required inputProps={{ inputMode: 'numeric', pattern: '[0-9]*'}} variant='outlined' label="Edição" type='number' name="edition" defaultValue={book.edition} style={{margin: 10,  width: '80%'}}/>
                        <TextField required multiline maxRows={3} variant='outlined' label="Descrição" name="description" defaultValue={book.description} style={{margin: 10,  width: '80%'}}/>
                        <TextField required variant='outlined' label="Capa" name="coverImg" defaultValue={book.coverImg} style={{margin: 10,  width: '80%'}}/>
                        <TextField required variant='outlined' label="Altura" type='number' name="height" defaultValue={book.height} style={{margin: 10,  width: '80%'}}/>
                        <TextField required variant='outlined' label="Largura" type='number' name="width" defaultValue={book.width} style={{margin: 10,  width: '80%'}}/>
                    </Grid>
                    <Grid Item xs={4} sm={4}>
                        <TextField required variant='outlined' label="Profundidade" type='number' name="length" defaultValue={book.length} style={{margin: 10,  width: '80%'}}/>
                        <TextField required variant='outlined' label="Peso" type='number' name="weight" defaultValue={book.weight} style={{margin: 10,  width: '80%'}}/>
                        <TextField required variant='outlined' label="ISBN13" type='number' name="isbn13" defaultValue={book.isbn13} style={{margin: 10 ,  width: '80%'}}/>
                        <TextField required variant='outlined' label="ISBN10" type='number' name="isbn10" defaultValue={book.isbn10} style={{margin: 10 ,  width: '80%'}}/>
                        <TextField required variant='outlined' label="Avaliação" type='number' name="score" defaultValue={book.score} style={{margin: 10 ,  width: '80%'}}/>
                        <TextField required variant='outlined' label="Preço" type='number' name="price" defaultValue={book.price} style={{margin: 10, width: '80%'}}/>
                        <TextField required variant='outlined' label="Quantidade" type='number' name="inventoryAmount" defaultValue={book.inventoryAmount} style={{margin: 10, width: '80%'}}/>
                    </Grid>
                    <Grid Item xs={4} sm={4} style={{display: 'flex',flexDirection: 'column', justifyContent: 'flex- start', alignItems: 'center'}}>
                        <TextField  variant='outlined' label="Autor" name="author" defaultValue={book.author} style={{margin: 10, width: '80%'}}/>   
                        <TextField  variant='outlined' label="Catergoria" name="category" defaultValue={book.category} style={{margin: 10, width: '80%'}}/>
                        <TextField  variant='outlined' label="Editora" name="publisher" defaultValue={book.publisher} style={{margin: 10, width: '80%'}}/>
                        <div style={{ display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'flex-start' , width: '100%', paddingLeft: 60}}>
                            <RadioGroup name='tipo'>
                                <FormControlLabel control={<Radio  />}  value="hardCover" label="Capa dura"/>
                                <FormControlLabel control={<Radio />} value="ebook" label="E-book" />
                            </RadioGroup>
                            <FormControlLabel control={<Checkbox  name="desconto" />} label="Desconto"/>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 250, marginTop: 130}}>
                            <ButtonCriar  variant='outlined' type="submit">
                                CADASTRAR
                            </ButtonCriar>
                            <Link to="/">
                                <ButtonVoltar variant='outlined'>
                                    Voltar
                                </ButtonVoltar>
                            </Link>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )
}

export default UpdateBook;
