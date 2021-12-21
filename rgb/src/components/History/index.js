import "./styles.css";

function History({ data, backgroundColor }) {
  return ( 
    <>
      {/* função '!!data.lenght &&' vai exibir o conteudo da section se 
      o valor de data for maior que zero, caso contrario nada sera exibido */}
      {!!data.length && (  
        <section>
          <h3>Históricos de cores gereadas:</h3>

            <ul>
              {data.map((rgb) => (
                <li key={rgb.join()}>
                  <div 
                    className="small-preview" 
                    style={{backgroundColor: backgroundColor(...rgb),}}>
                  </div>
                  {rgb.join(", ")}
                </li>
              ))}
            </ul>
        </section>
      )}
    </>
  );
}

export default History;
