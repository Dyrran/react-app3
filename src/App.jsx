import { useState } from 'react'
// import MainForm from './components/MainForm/MainForm'
// import MainForm2 from './components/MainForm2/MainForm2'

import './App.css'
// import SimpleForm from './components/SimpleForm/SimpleForm'
import 'bulma/css/bulma.css';
// import MediumForm from './components/MediumForm/MediumForm';
// import SuperForm from './components/SuperForm/SuperForm';
import LoginForm from './components/LoginForm/LoginForm';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const [count, setCount] = useState(0);
  const [isLoggedIn, setLoggedIn] = useState(false);
  let content = <></>

  function ChangeLoginMode() {
    setLoggedIn( !isLoggedIn );
  }

  if ( isLoggedIn == false ) {
    content = <LoginForm isLoggedIn={isLoggedIn} />
  }
  else {
    content = <Dashboard />
  }

  return (
    <>
      { isLoggedIn
      ? <Dashboard ChangeLoginMode={ChangeLoginMode} />
      : <LoginForm ChangeLoginMode={ChangeLoginMode} /> }
    </>
  )
  // return (
  //   <MainForm2 />
  // )
}

export default App
