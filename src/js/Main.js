import React from 'react';
import {DataLoad, DataDelete} from '../js/DataLoad'
import Post from '../js/Post'

import addpic from '../assets/img/plus.png'

import '../css/Main.css'
class Main extends React.Component {

  state = {
    items: [],
  }
  componentDidMount = async () => {
    const arr = await DataLoad();
    this.setState({items: arr});
  }
  
  sortItems = () =>{
    this.state.items.sort((a,b)=>{
      return new Date(b.createdAt) - new Date(a.createdAt);
    })
  }

  deletePost = async (id) =>{
    const item = await DataDelete(id);
    this.setState({items: [...this.state.items.filter(el=>el.id !==item.id)]});
  }

  render() {
    const {items, show} = this.state;
    console.log(show);
    
    this.sortItems();

    return (
      <div className='main'>
        <div className='add_new'>
          <img onClick={this.props.showModal} src={addpic}></img>
        </div>
        <div className="posts_holder">
          {
            items.map((element) => (
            <Post 
              key = {element.id} 
              delPost={this.deletePost} 
              element={element}
            />
            ))
          }
        </div>
      </div>
    );
  }
}


export default Main;