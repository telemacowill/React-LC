import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleMinusClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handlePlusClik = () => {
    setCount (count +1);
  };

  return (
    <>
      <h1>Contador : {count} </h1>

      <button className="plus" onClick={handlePlusClik}> 
        + 
      </button>
      <button className="minus"  onClick={handleMinusClick}> 
        - 
      </button>

    </>
  );
}

export default App;
