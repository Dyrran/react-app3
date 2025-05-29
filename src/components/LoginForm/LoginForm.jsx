import React, { useState } from 'react';
import 'bulma/css/bulma.css';

export default function LoginForm( {ChangeLoginMode} ) {
    const [inputValue, setInputValue] = useState('');
    const [passValue, setPassValue] = useState('');
    
    function tryLogin() {
        setInputValue('');
        setPassValue('');
        const data = { username: inputValue, password: passValue };
        console.log(JSON.stringify(data));
        ChangeLoginMode();
    }

    return (
        <div className='container' style={{ maxWidth: 400, marginTop: 80 }}>

            <h1 className="title">Login</h1>

            <div className='field'>
                <label className="label">Username:</label>
                <div className='control'>
                    <input
                        className='input'
                        type='text'
                        placeholder='thegoodcitizen'
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                    />
                </div>
            </div>
            
            <div className='field'>
                <label className="label" style={{ marginTop: 20 }}>Password:</label>
                <div className='control'>
                    <input
                        className='input'
                        type='password'
                        placeholder='********'
                        value={passValue}
                        onChange={e => setPassValue(e.target.value)}
                    />
                </div>
            </div>

            <div className='buttons'>
                <button className='button is-primary is-fullwidth' onClick={tryLogin}>
                    Login
                </button>
                <button className='button is-fullwidth'>
                    Recover password
                </button>
            </div>

        </div>
    )
}