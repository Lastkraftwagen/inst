import React from 'react';
import Header from "../js/Header"
import Main from "./Main"
import ModalAdd from "./ModalAdd"
import { DataLoad, DataSend, DataDelete } from '../js/DataLoad'

import '../css/index.css';
import '../css/App.css';


class App extends React.Component {

  state = {
    show: false,
    isLoaded: false,
    items: []
  }

  componentDidMount = async () => {
    const arr = await DataLoad();

    this.setState({ items: arr });
    if (this.state.items.length != 0) {
      this.setState({ isLoaded: true });
    }
  }
  
  deletePost = async (id) => {
    const item = await DataDelete(id);
    this.setState({ items: [...this.state.items.filter(el => el.id !== item.id)] });
  }

  getHeaderClass = () => {
    return this.state.show ? "hidden" : "header_cont";
  }

  postItem = async (item) => {
    this.setState({ isPicLoading: true });
    const i = await DataSend(item);
    
    if (i != null)
    {
      const temp = await i.json();
      item.id = temp.id;
      console.log(item);
      
      this.setState({ items: [...this.state.items, item] });
    }
  }

  showModal = () => {
    this.setState({ show: true });
  }

  closeModal = () => {
    this.setState({ show: false });
  }

  render() {
    const { show, isLoaded, items } = this.state;
    if (isLoaded) {
      return (
            <div className="App" >
          <Header 
            id='page_header'
            className={this.getHeaderClass()} />
          <Main 
            class="main" 
            items={items} 
            delPost={this.deletePost}
            showModal={this.showModal} />
          {show && <ModalAdd close={this.closeModal} apply={this.postItem} />}
        </div>
      );
    }
    else {
      return (<p>Loading...</p>);
    }
  }
}


export default App;