import { useState } from "react";

import ColorBox from "./components/ColorBox";
import History from "./components/History";




function App() {

  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const [history, setHistory] = useState([]);

  const backgroundColor = (r, g, b) => `rgb(${r}, ${g}, ${b})`;

  const isColorInHistory = history.some(
    (rgb) => JSON.stringify(rgb) === JSON.stringify([red, green, blue])
  );

  const generateRandomColor = () => {
    const newRed = (Math.floor(Math.random() * 256));
    const newGreen = (Math.floor(Math.random() * 256));
    const newBlue = (Math.floor(Math.random() * 256));

    setRed(newRed);
    setGreen(newGreen);
    setBlue(newBlue);
   
    setHistory((h) => [[newRed, newGreen, newBlue], ...h])
  };

  return (
    <>

      <ColorBox backgroundColor={backgroundColor(red, green, blue)} />

      <h3>Red: {red} </h3>
      <input 
        type="range" 
        min={0}
        max={255} 
        value={red} 
        onChange={({ target }) => setRed(parseInt(target.value))}
      />

      <h3>Green: {green} </h3>
      <input 
        type="range" 
        min={0} 
        max={255} 
        value={green} 
        onChange={({ target }) => setGreen(parseInt(target.value))}
      />

      <h3>Blue: {blue} </h3>
      <input 
        type="range" 
        min={0} 
        max={255} 
        value={blue} 
        onChange={({ target }) => setBlue(parseInt(target.value))}
        disabled={isColorInHistory}
      />

      <br />
      <br /> 

      {/* a funçao onClick esta gerando um novo array adicionando um novo 
      'history' h ao já existente, o array esta criando um array---função disable
      desabilida o botão caso a cor ja exista no history */}
      <button 
        onClick={() => setHistory((h) => [[red, green, blue], ...h])}
        disabled={isColorInHistory}
      >
        Adicionar Cor ao Histórico
      </button>

      <br />
      <br /> 

      <button onClick={generateRandomColor}>Gerar Cor Aleatória</button>

      <hr />

      <History data={history} backgroundColor={backgroundColor} />
      
    </>
  );
}

export default App;
