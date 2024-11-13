import { useEffect, useState } from 'react'
import './App.css'
import Cards from './components/cards';

const App = () => {
  const [data, setData] = useState(null);
  const [filtro, setFiltro] = useState(null);

  useEffect(() => {
    fetch('/coqueteis.json')
      .then(response => response.json())
      .then(data => {
        setData(data)
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  function Filtragem(drink){
    if (drink.ingredientes.includes(filtro) || filtro === null) {
      return true
    }
  }

  return (
    <div id='inGeneral'>
      <div id='alinha'  >
        <h1>Cocktails</h1>
        <h2>Feito com:</h2>
        <div id='carregaBotao'>
          <button className='btns' onClick={() => setFiltro(null)}>Todos</button>
          <button className='btns' onClick={() => setFiltro("Vodka")}>Vodka</button>
          <button className='btns' onClick={() => setFiltro("Gin")}>Gin</button>
          <button className='btns' onClick={() => setFiltro("Cachaça")}>Cachaça</button>
          <button className='btns' onClick={() => setFiltro("Rum")}>Rum</button>
        </div>
      </div>

      <div id='cards'>
        {data.bebidas.filter(Filtragem).map(item => (
          <Cards key={item.id} nome={item.nome} imagem={item.imagem} ingredientes={item.ingredientes} />
        ))}
      </div>
    </div>
  );
};

export default App;