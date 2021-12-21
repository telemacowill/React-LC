import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  const fruits =["maça", "banana", "laranja"];

  return (
    <>
      <h1>{number}</h1>

      <h2 className={number >=0 ? "positive" : "negative"}>
        {number >= 0 ? "Positivo" : "Negativo"}
      </h2>

      <input
        type="number"
        name="number" 
        value={number} 
        onChange={(event) => setNumber(parseInt(event.target.value))}
      />

      <br>
      </br>

      {/* teste com area de texto o evento onChange funciona mas 
      volta negativo porque a aplicação não espera uma string */}
      {/* <textarea
        //type="number"
        name="number" 
        value={number} 
        onChange={(event) => setNumber(event.target.value)}
      ></textarea>     */}

      {/* Tabuada */}
      {/* utilizando o map para repetir elementos 
      e passando o tamanho do array pro descontrução.
      um loop */}

      <ul>
        {Array.from({ length: 11}).map((_, i) => (
          <li key={i}>
            {number} x {i} = <strong>{number * i}</strong>
          </li>
        ))}
      </ul>

      <hr />

      {/* definindo identificador ID (key) para elemento
      utilizar o index (i) somente quando não houver outras alternativas.
      usa sempre que houver elementeos que se repetem */}
      <div>
        {fruits.map((fruit) => (
          <p key={fruit}> {fruit} </p>
        ))}
      </div>

    </>
  );
}

export default App;
