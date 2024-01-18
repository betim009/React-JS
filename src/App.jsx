import './App.css'
import Title from './Title'

function App() {

  const pokemon1 = {
    nome: 'Charmander',
    tipo: 'fogo',
    cidade: 'veridian',
    url: 'https://i.pinimg.com/736x/6c/50/2d/6c502de3855d805202a31b4b6c50359f.jpg', 
  };

  const pokemon2 = {
    nome: 'Bulbasaur',
    tipo: 'planta',
    cidade: 'veridian',
    url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
  };


  return (
    <>
      
      <Title poke={pokemon1}/>
      <Title poke={pokemon2}/>
    </>
  )
}

export default App
