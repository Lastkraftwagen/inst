import React from 'react';
import PageBottom from '../js/PageBottom'

import '../css/Post.css';
import trash from '../assets/img/trash.png'
class Post extends React.Component {

  getRandomPic = ()=>{
    return `https://picsum.photos/id/${Math.floor(Math.random() * 200)}/600/${Math.floor(Math.random() * 200)+300}`;
  }

  render(){
    const { 
      imageUrl, 
      avatar, 
      userName, 
      comments,
      likes,
      description,
      id} = this.props.element;
    
      
    return(
        <div className="post">
          <div className="post_topblock">
            <div className="group_title">
              <img src = {avatar}></img>
              <p>{userName} </p>
              <p>{id} </p>
            </div>
            <div></div>
            <img className='trash' 
            onClick={this.props.delPost.bind(this, id)} 
            src = {trash}></img>
          </div>
          <div className="content">
            {/* <img src = {this.getRandomPic()}></img> */}
            <img src = {imageUrl}></img>
          </div>
          <PageBottom 
          className="comments_plock" 
          comments={comments} 
          likes = {likes}
          userName = {userName}
          description = {description}> </PageBottom> 
        </div>
    );
  }
}

export default Post;