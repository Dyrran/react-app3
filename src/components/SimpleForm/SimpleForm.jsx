import React, { useState } from 'react';
import 'bulma/css/bulma.css';



const SimpleForm = () => {
  const [inputValue, setInputValue] = useState(''); // Input vacio
  const [valor, setValor] = useState("fooziman");

  // La funcion llamada por el boton
  const handleSend = () => {
    setValor("barziman")
    const data = { value: inputValue };
    console.log(JSON.stringify(data));
  };

  const handleClear = () => {
    setInputValue('');
  };

  return (
    <div className="container" style={{ maxWidth: 400, marginTop: 40 }}>
      <div className="field">
        <label className="label">Ingresa un valor, {valor}:</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Escribe algo..."
            value={inputValue} // almacenar el texto transcrito en el input
            onChange={e => setInputValue(e.target.value)} // Estandar para captar texto
          />
        </div>
      </div>
      <div className="buttons">
        <button className="button is-primary" onClick={handleSend}>
          Enviar JSON
        </button>
        <button className="button is-danger" onClick={handleClear}>
          Borrar
        </button>
      </div>
    </div>
  );
};

export default SimpleForm;