import { useState } from "react";
import { useEffect } from "react";

import PasswordBox from "../PasswordBox/";
import CopyPasswordButton from "../CopyPasswordButton";

import "./styles.css";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passwordLenght, setPasswordLength] = useState(8);
  const [digitsLenght, setDigitsLength] = useState(2);
  const [symbolsLenght, setSymbolsLength] = useState(2);

  useEffect(() => {
    const draftPassword = [];

    let lettersLenght = passwordLenght - digitsLenght - symbolsLenght;
    if (lettersLenght < 0) lettersLenght = 0;

    draftPassword.push(...Array.from({length:digitsLenght}, randomDigit));
    draftPassword.push(...Array.from({length:symbolsLenght}, randomSymbol));
    draftPassword.push(...Array.from({length:lettersLenght}, randomLetter));    

    setPassword(
      draftPassword
        .slice(0, passwordLenght)
        .sort(() => Math.random() - 0.5)
        .join("")
    );
  }, [passwordLenght, digitsLenght, symbolsLenght]);

  const randomDigit = () => {
    const digits = "0123456789";

    return digits[Math.floor(Math.random() * digits.length)];
  };

  const randomSymbol = () => {
    const symbols = "#$&(+,./;?@[]^{}";

    return symbols[Math.floor(Math.random() * symbols.length)];
  };

  const randomLetter = () => {
    const letters = "abcdefghijlmnopqrstuvwxyz";

    const letter = letters[Math.floor(Math.random() * letters.length)];

    return Math.random() >= 0.5 ? letter : letter.toUpperCase();
  };

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

    <PasswordBox password={password}/>
    <CopyPasswordButton password={password}/>

  </>;
};


export default PasswordGenerator;