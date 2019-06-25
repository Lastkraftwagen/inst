import React from 'react';
import Post from "../../redux/containers/Post"
import addpic from '../../assets/img/plus.png'
import './Main.css'

class Main extends React.Component {

  state = {
    items: this.props.items,
    showModal: false
  }

  componentDidUpdate(prevProps) {
    if (this.props.items.length !== prevProps.items.length ) {
      this.setState({items : this.props.items})
    }
  }

  sortItems = () => {
    this.state.items.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    })
  }

  render() {
    const { 
      items 
    } = this.state;

    this.sortItems();
    
    return (
      <div className='main'>
        <div className='add_new'>
          <img 
          alt='plus'
          onClick={this.props.showModal} 
          src={addpic}></img>
        </div>
        <div className="posts_holder">
          {
            items.map((element) => (
              <Post
                key={element.id}
                element={element}
                comments={element.comments}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default Main;