// import logo from './logo.svg';
import './App.css'; //importamos el css
import ImgRickMorty from './img/rick-morty.png'; //Importamos la imagen de rick-morty
import { useState } from 'react'; //hook useState de estados
import Fcaracteres from './components/caracteres';

function App() {

    //valor1 : estado actual , valor2 : estado que renderizao guarda al nuevo  , useSatte inica en null (estado inicial)
  const [caracteres , setCaracteres] = useState(null);
  const reqApi  = async() =>{
    // console.log("Clicking")
    const respuesta = await fetch('https://rickandmortyapi.com/api/character');
    const desifrado = await respuesta.json();

    // console.log(desifrado);
    setCaracteres(desifrado.results);
  }
   console.log(caracteres);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {/* condicional if  */}
        {caracteres ? (
          /* Funcion del componente caracteres , le pasamos setCaracteres para saber el contenido asincrono es snulll o no*/
          <Fcaracteres info={caracteres} setCaracteres={setCaracteres} />  

        ):(
          <>
            <img src={ImgRickMorty} alt="Rick & Morty" className='img-home' />
            <button onClick={reqApi} className="btn-search">Buscar personajes</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
