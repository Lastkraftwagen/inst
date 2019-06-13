import React from 'react';
import Header from "../js/Header"
import Main from "./Main"
import '../css/App.css';


function App() {
  return (
    <div className="App">
    <Header className='header_cont'/>
    <Main className="main"> </Main>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
  }


export default App;


