import { memo } from "react";

import "./styles.css";

const Child = ({counter, incrementCounter }) => {
  console.log("Componente filho esta sendo renderizado!");

  return (
    <div className="child">
      <h2>Componente Filho: {counter}</h2>
      <button onClick={incrementCounter}> +1 </button>
    </div>
  );
};

export default memo(Child);

