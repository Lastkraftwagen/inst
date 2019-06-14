import React from 'react';
import Data from '../js/Data'
import Post from '../js/Post'

import '../css/Main.css'
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }
  componentDidMount = async () => {
    const arr = await Data();
    this.setState({items: arr});
  }

  render() {
    const {items} = this.state;
    return (
      <div className='main'>
        {
          items.map((element) => (
          <Post key = {element.id} elements={element}>
          </Post>))
        }
      </div>
    );
  }
}


export default Main;