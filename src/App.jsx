import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Form from './components/Form'
import ImagenCripto from './img/imagen-criptos.png'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1 `
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  font-size: 34px;
  margin-top: 80px;
  margin-bottom: 50px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 6px auto 0 auto;
  }
`


function App() {

  const [ monedas, setMonedas ] = useState({})

  useEffect(() => {
    if(Object.keys(monedas).length > 0) {
      console.log(monedas);
    }
  }, [monedas])

  return (
    <Container>
      <Imagen
        src={ImagenCripto}
        alt="Imagenes criptomonedas"
      />
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>
        <Form 
          setMonedas={setMonedas}
        />
      </div>
    </Container>
  )
}

export default App
