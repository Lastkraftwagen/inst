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
  
  sortItems = () =>{
    this.state.items.sort((a,b)=>{
      return new Date(b.createdAt) - new Date(a.createdAt);
    })
  }

  render() {
    const {items} = this.state;
    
    this.sortItems();

    return (
      
      <div className='main'>
        <div className="posts_holder">
          {
            items.map((element) => (
            <Post key = {element.id} elements={element}>
            </Post>))
          }
        </div>
      </div>
    );
  }
}


export default Main;