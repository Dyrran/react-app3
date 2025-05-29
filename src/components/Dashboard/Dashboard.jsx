import React, { useState } from 'react';
import 'bulma/css/bulma.css';

export default function Dashboard( {ChangeLoginMode} ) {


    return (
        <div className='container' style={{ maxWidth: 400, marginTop: 80 }}>
            <h1 className="title">Dashboard</h1>
            <div className='content'>
                <p className="text">Welcome, user.</p>
            </div>
            

            <div className='buttons'>
                <button className='button is-fullwidth' onClick={ChangeLoginMode}>
                    Log out
                </button>
            </div>
        </div>
    )
}