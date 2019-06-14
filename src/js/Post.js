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

  getRandomPic = ()=>{
    return `https://picsum.photos/id/${Math.floor(Math.random() * 200)}/600/600`;
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
            <img src = {this.getRandomPic()}></img>
          </div>
          {/* <Comments></Comments> */}
        </div>
    );
  }
}

export default Post;