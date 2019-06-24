import React from 'react';
import Header from "./Header"
import Main from "./Main"
import ModalAdd from "./ModalAdd"

import '../css/index.css';
import '../css/App.css';

class App extends React.Component {

  state = {
    show: false
  }


  componentDidMount = () => {
    this.props.loadData();
  }

  // deletePost = (id) => {
  //   this.props.dataDelete(id);
  // }

  postItem = (item) => {
    this.props.postItem(item);
  }

  showModal = () => {
    this.setState({ show: true });
  }

  closeModal = () => {
    this.setState({ show: false });
  }

  render() {
    const {
      show
    } = this.state;
    const {
      items,
      isLoaded,
      dataDelete } = this.props;
    if (isLoaded) {
      return (
        <div className="App" >
          <Header
            id='page_header'
            className='header_cont' />
          <Main
            className="main"
            items={items}
            delPost={dataDelete}
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