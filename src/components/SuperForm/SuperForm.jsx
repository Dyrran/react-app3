import React, { useState } from 'react';
import 'bulma/css/bulma.css';

const SuperForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [radioValue, setRadioValue] = useState('');
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  const handleSend = () => {
    const data = {
      inputValue,
      radioValue,
      check1,
      check2,
    };
    console.log(JSON.stringify(data));
  };

  const handleClear = () => {
    setInputValue('');
    setRadioValue('');
    setCheck1(false);
    setCheck2(false);
  };

  return (
    <div className="container" style={{ maxWidth: 400, marginTop: 40 }}>
      {/* Input de texto */}
      <div className="field">
        <label className="label">Valor</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Escribe algo..."
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
        </div>
      </div>

      {/* Radios */}
      <div className="field">
        <label className="label">Selecciona una opción</label>
        <div className="control">
          <label className="radio">
            <input
              type="radio"
              name="radioGroup"
              value="opcionA"
              checked={radioValue === 'opcionA'}
              onChange={() => setRadioValue('opcionA')}
            />
            &nbsp;Opción A
          </label>
          &nbsp;&nbsp;
          <label className="radio">
            <input
              type="radio"
              name="radioGroup"
              value="opcionB"
              checked={radioValue === 'opcionB'}
              onChange={() => setRadioValue('opcionB')}
            />
            &nbsp;Opción B
          </label>
        </div>
      </div>

      {/* Checklists */}
      <div className="field">
        <label className="label">Selecciona los checks</label>
        <div className="control">
          <label className="checkbox">
            <input
              type="checkbox"
              checked={check1}
              onChange={() => setCheck1(!check1)}
            />
            &nbsp;Check 1
          </label>
        </div>
        <div className="control">
          <label className="checkbox">
            <input
              type="checkbox"
              checked={check2}
              onChange={() => setCheck2(!check2)}
            />
            &nbsp;Check 2
          </label>
        </div>
      </div>

      {/* Botones */}
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

export default SuperForm;
