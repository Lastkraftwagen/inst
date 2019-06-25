import React from 'react';
import Header from "../Header"
import Main from "../Main"
import ModalAdd from "../../redux/containers/ModalAdd"

import '../../css/index.css';
import './App.css';

class App extends React.Component {

  state = {
    show: false
  }

  componentDidMount = () => {
    this.props.loadData();
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
      isLoaded
    } = this.props;

    if (isLoaded) {
      return (
        <div className="App" >
          <Header
            id='page_header'
            className='header_cont' 
          />
          <Main
            className="main"
            items={items}
            showModal={this.showModal} 
          />
          {show && <ModalAdd close={this.closeModal} />}
        </div>
      );
    }
    else {
      return (<p>Loading...</p>);
    }
  }
}


export default App;