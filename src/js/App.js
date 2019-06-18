import React from 'react';
import Header from "../js/Header"
import Main from "./Main"
import ModalAdd from "./ModalAdd"
import { DataSend } from '../js/DataLoad'


import '../css/index.css';
import '../css/App.css';


class App extends React.Component {

  state = {
    show: false
  }

  showModal = () => {
    this.setState({ show: true });
  }

  closeModal = () => {
    this.setState({ show: false });
  }

  getHeaderClass = () => {
    return this.state.show ? "hidden":"header_cont";
  }

  postItem = async(item) => {
    const arr = await DataSend(item);
  }

  render() {
    const { show } = this.state;
    return (
      <div className="App">
        <Header className={this.getHeaderClass()}/>
        <Main className="main" showModal={this.showModal} />
        {show && <ModalAdd close={this.closeModal} apply={this.postItem} />}
      </div>
    );
  }
}


export default App;