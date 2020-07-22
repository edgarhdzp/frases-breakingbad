import React, {useState, useEffect} from 'react';
import styled from  '@emotion/styled';
import Frase from './components/Frase';

//* nuestros styled components
const Contenedor = styled.div `
  display:flex;
  align-items:center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007D35 0%, #007D35 40%, #0f574E 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color:#fff;
  margin-top : 3rem;
  padding: 1rem 3 rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {

  //* state de frases inicia como un objeto vacio
  const [frase, GuardarFrase] = useState({});

  //* asyn detiene el codigo hasta que se complete el await
  const consultarApi = async () =>{
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json()
    GuardarFrase(frase[0]);
  }

  //*cargar una frase automaticamente
  useEffect(() => {
   consultarApi()
  }, [])

  return (
    <Contenedor>
      <Frase 
      frase={frase}/>

      <Boton
      onClick={consultarApi}
      >
          Obtener Frase
      </Boton>
    </Contenedor>
  );
}

export default App;
