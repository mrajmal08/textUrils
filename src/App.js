import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

function App() {

  const [mode, setMode] = useState('light');
  const [enableMode, setenableMode] = useState('Enable dark Mode');

  const toggleMode = () => {
    if(mode == 'light'){
      setMode('dark');
      setenableMode('Enable Light Mode')
      document.body.style.backgroundColor= '#282b66'
    }else{
      setMode('light');
      setenableMode('Enable Dark Mode')
      document.body.style.backgroundColor= 'white'
    }
  }

  return (
    <>
      <Navbar title="TextUrils" mode={mode} toggleMode={toggleMode} enableMode={enableMode}/>
      {/* <Navbar /> */}

      {/* <About /> */}

      <div className="container my-3">
        <TextForm heading ="Enter text to finalize" mode={mode} toggleMode={toggleMode}/>
      </div>

    </>
  );
}

export default App;
