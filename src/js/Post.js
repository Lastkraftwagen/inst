import React from 'react';
import '../css/Post.css';
import trash from '../assets/img/trash.png'
class Post extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   elements: []
    // }
  }


  render(){
    console.log(this.props.elements);
    


    const { createdAt,  imageUrl, avatar, userName} = this.props.elements;
    return(
        <div className="post">
          <div className="post_topblock">
            <div className="group_title">
              <img src = {avatar}></img>
              <p>{userName}</p>
            </div>
            <div></div>
            <img className='trash' src = {trash}></img>
          </div>
          <div className="content">
            <img src = {imageUrl}></img>
          </div>
          {/* <Comments></Comments> */}
        </div>
    );
  }
}

export default Post;