import React from 'react';
import Header from "../js/Header"
import Main from "./Main"
import ModalAdd from "./ModalAdd"

import '../css/App.css';


class App extends React.Component {

  state = {
    show : false
  }

  showModal = () =>{
    this.setState({show: true});
  }

  closeModal =() =>{
    this.setState({show: false});
  }

  render(){

    const {show} = this.state;

  return (
    <div className="App">
      <Header className='header_cont'/>
      <Main className="main" showModal={this.showModal}/> 
      {show&&<ModalAdd close={this.closeModal}/>}
    </div>
  );
  }
}


export default App;