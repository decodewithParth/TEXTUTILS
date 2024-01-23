import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Link, Route } from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light')   //whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, Type) => {
    setAlert({
      msg: message,
      type: Type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const removeBodyClass=()=>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
  }

  const toggleMode = (cls) => {
    console.log(cls)
    removeBodyClass();
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'Textutils - Darkmode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'Textutils - Lightmode';
    }
  }
  return (
    <>
      <Router>
      <Navbar title='Textutils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Route exact path="/">
        <TextForm showAlert={showAlert} heading="Try Textutils - Word counter, charector counter, space counter" mode={mode} />
        </Route> 
        <Route exact path="/about">
        <About mode={mode}/>
        </Route>
      </div>
      </Router>
    </>
  );
}

export default App;
