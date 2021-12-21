import { useState, useEffect } from "react";

import "./styles.css";

const PasswordGenerator = () => {
  const [password, setPassword] = ("");
  const [passwordLenght, setPasswordLength] = useState(8);
  const [digitsLenght, setDigitsLength] = useState(2);
  const [symbolsLenght, setSymbolsLength] = useState(2);

  
  useEffect(() => {
    const draftPassword = [];

    draftPassword.push("1")
    draftPassword.push("2")
    draftPassword.push("$")
    draftPassword.push("#")
    draftPassword.push("x")
    draftPassword.push("x")
    draftPassword.push("x")
    draftPassword.push("x")
    draftPassword.push("x")
    draftPassword.push("x")
    draftPassword.push("x")
    draftPassword.push("x")

    setPassword(
      draftPassword
        .slice(0, passwordLenght)
        .sort(() => Math.random() - 0.5)
        .join("")
    );
  }, [passwordLenght, digitsLenght, symbolsLenght]);


  return <>
    <div className="slider">
      <label htmlFor="password-length">Tamanho</label>
      <input 
        id="password-length" 
        type="range" 
        min={4} 
        max={64} 
        value={passwordLenght} 
        onChange={({target}) => setPasswordLength(parseInt(target.value))}
      />
      <span>{passwordLenght}</span>
    </div>
    <div className="slider">
      <label htmlFor="digits-length">Digitos</label>
      <input 
        id="digits-length" 
        type="range" 
        min={0} 
        max={10} 
        value={digitsLenght} 
        onChange={({target}) => setDigitsLength(parseInt(target.value))}
      />
      <span>{digitsLenght}</span>
    </div>
    <div className="slider">
      <label htmlFor="symbols-length">Símbolos</label>
      <input 
        id="symbols-length" 
        type="range" 
        min={0} 
        max={10} 
        value={symbolsLenght} 
        onChange={({target}) => setSymbolsLength(parseInt(target.value))}
      />
      <span>{symbolsLenght}</span>
    </div>

    <h1>{password}</h1>

  </>;
};


export default PasswordGenerator;