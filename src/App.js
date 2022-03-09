import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [enableMode, setenableMode] = useState('Enable dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    
    setTimeout(() =>{
      setAlert(null)
    }, 2000)

  }

  const toggleMode = () => {
    if(mode == 'light'){
      setMode('dark');
      setenableMode('Enable Light Mode')
      document.body.style.backgroundColor= '#282b66'
      showAlert('Dark mode has enabled successfully', 'success')
    }else{
      setMode('light');
      setenableMode('Enable Dark Mode')
      document.body.style.backgroundColor= 'white'
      showAlert('Light mode has enabled successfully', 'success')
    }
  }

  return (
    <>

    <BrowserRouter>
       

      <Navbar title="TextUrils" mode={mode} toggleMode={toggleMode} enableMode={enableMode}/>
      <Alert alert={alert}/>

       <div className="container my-3">

        <Routes>

          <Route exact path="about" element={<About  mode={mode}/>} />     
           
            <Route exact path="/" element= { <TextForm showAlert={showAlert} heading ="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} toggleMode={toggleMode}/>} />
          
          </Routes>

           </div>
      </BrowserRouter>,
    </>
  );
}

export default App;
