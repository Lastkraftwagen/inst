import React from 'react';
import Header from "./Header"
import Main from "./Main"
import ModalAdd from "./ModalAdd"
import { DataSend } from './DataLoad'


import '../css/index.css';
import '../css/App.css';

class App extends React.Component {

  state = {
    show: false,
    // isLoaded: false,
    // items: []
  }


  componentDidMount = () => {
    this.props.loadData();
  }
  
  deletePost = (id) => {

    this.props.dataDelete(id);
    // const item = await DataDelete(id);
    // this.setState({ items: [...this.state.items.filter(el => el.id !== item.id)] });
  }

  postItem = async (item) => {
    this.setState({ isPicLoading: true });
    const i = await DataSend(item);
    
    if (i != null)
    {
      const temp = await i.json();
      item.id = temp.id;
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
    // const { show, isLoaded, items } = this.state;
    const{show} = this.state;
    const { items, isLoaded } = this.props;
    if (isLoaded) {
      return (
            <div className="App" >
          <Header 
            id='page_header'
            className='header_cont'/>
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