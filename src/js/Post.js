import React from 'react';
import PageBottom from '../js/PageBottom'
import ModalPost from './ModalPost'
import '../css/Post.css';
import trash from '../assets/img/trash.png'
class Post extends React.Component {

  getRandomPic = () => {
    return `https://picsum.photos/id/${Math.floor(Math.random() * 200)}/600/${Math.floor(Math.random() * 200) + 300}`;
  }

  openComments = () => {
    this.setState({showModal: !this.state.showModal})
  }

state= {
  showModal : false
}

  render() {
    const {
      imageUrl,
      avatar,
      userName,
      comments,
      likes,
      description,
      id,
      createdAt } = this.props.element;

    const{
      showModal
    } = this.state;

    return (
      <div className="post">
        <div className="post_topblock">
          <div className="group_title">
            <img src={avatar}></img>
            <p>{userName} </p>
            <p>{createdAt} </p>
          </div>
          <div></div>
          <img className='trash'
            onClick={this.props.delPost.bind(this, id)}
            src={trash}></img>
        </div>
        <div className="content">
          <img src={imageUrl}></img>
        </div>
        <PageBottom
          className="comments_plock"
          comments={comments}
          likes={likes}
          userName={userName}
          description={description}
          showPostModal={this.openComments} >
        </PageBottom>
        {showModal && 
          <ModalPost 
            element={this.props.element} 
            close={this.openComments}
            comments={comments}
          ></ModalPost>}
      </div>
    );
  }
}

export default Post;