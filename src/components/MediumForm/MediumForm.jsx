import React, { useState } from 'react';
import 'bulma/css/bulma.css';

const MediumForm = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [selectValue, setSelectValue] = useState('');

  const handleSend = () => {
    const data = {
      input1,
      input2,
      selectValue,
    };
    console.log(JSON.stringify(data));
  };

  const handleClear = () => {
    setInput1('');
    setInput2('');
    setSelectValue('');
  };

  return (
    <div className="container" style={{ maxWidth: 400, marginTop: 40 }}>
      <div className="field">
        <label className="label">Primer valor</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Escribe el primer valor..."
            value={input1}
            onChange={e => setInput1(e.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Segundo valor</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Escribe el segundo valor..."
            value={input2}
            onChange={e => setInput2(e.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Selecciona una opción</label>
        <div className="control">
          <div className="select is-fullwidth">
            <select
              value={selectValue}
              onChange={e => setSelectValue(e.target.value)}
            >
              <option value="">Elige una opción</option>
              <option value="opcion1">Opción 1</option>
              <option value="opcion2">Opción 2</option>
              <option value="opcion3">Opción 3</option>
            </select>
          </div>
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

export default MediumForm;