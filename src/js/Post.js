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
      createdAt,  
      imageUrl, 
      avatar, 
      userName, 
      comments,
      likes,
      description} = this.props.elements;
    
    return(
        <div className="post">
          <div className="post_topblock">
            <div className="group_title">
              <img src = {avatar}></img>
              <p>{userName} </p>
            </div>
            <div></div>
            <img className='trash' src = {trash}></img>
          </div>
          <div className="content">
            <img src = {this.getRandomPic()}></img>
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