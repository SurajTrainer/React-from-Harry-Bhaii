import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import Navbar from './component/Navbar';
import About from './component/About';
import TextForm from './component/TextForm';
// import {BrowserRouter as Router,  Route,  Link} from "react-router-dom";

function App() {

  const [mode,setmode] = useState('light');

  const toggleMode = ()=> {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = 'blue'

      // document.title = 'Utilities - Home Dark mode'

      
      // setInterval(() => {
      //   document.title = 'Hey - you are upcoming winner ,..'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Listen Carefully - you are upcoming winner ,..'
      // }, 1500);


    }else{
      setmode('light')
      document.body.style.backgroundColor = 'white'

      // document.title = 'Utilities - Home Light mode'
    
    }
  }
  return (
   <>
  
    {/* <Navbar title= "Suraj Singh" /> */}

    <Navbar  mode = {mode} toggleMode = {toggleMode}/>
    {/* <About/> */}

    {/* Router using for not loading on every time */} 
    {/* using with npm install react-router-dom */}
    {/* /* <Router>
          <Route path="/about"
          element={<About />}>
            
          </Route>
          
          <Route path="/" element={ <TextForm mode = {mode}/>}>
   
          </Route>
        </Router> */}


    <About/>
   </>
  );
}

export default App;
