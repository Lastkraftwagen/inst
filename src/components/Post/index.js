import React from 'react';
import Moment from 'react-moment';

// import View from './View'
import PageBottom from '../PageBottom'
import ModalPost from '../ModalPost'
import './Post.css';
import trash from '../../assets/img/trash.png'
var classNames = require('classnames');

class Post extends React.Component {

  state = {
    showModal: false,
    comments: this.props.comments,
    comment: '',
    createdAt: this.props.element.createdAt,
    timestring: ''
  }
  openComments = () => {
    this.setState({ showModal: !this.state.showModal })
  }


  handleTextChange = (e) => {
    this.setState({ comment: e.target.value })
  }

  addNewComment = () => {
    if (this.state.comment !== '')
      this.setState({ comments: [...this.state.comments, this.state.comment] })  
  }

  componentDidMount = () => {
    if (this.props.comments === undefined) {
      this.setState({ 
        comments: [] 
      })
    }
  }

  render() {
    const {
      comments,
      showModal, 
      comment
    } = this.state;

    const {
      imageUrl,
      avatar,
      userName,
      likes,
      description,
      id
    } = this.props.element;

    return (
      <div className="post">
        <div className="post_topblock">
          <div className="group_title">
            <img 
              src={avatar}
              alt="avatar"
            ></img>
            <p>{userName} </p>
          </div>
          <div></div>
          <img 
            className='trash'
            onClick={this.props.dataDelete.bind(this,id)}
            src={trash}
            alt="avatar"
          />
        </div>
        <div className="content">
          <img src={imageUrl} alt="content"></img>
        </div>
        <PageBottom
          className="comments_block"
          comments={this.state.comments}
          likes={likes}
          userName={userName}
          description={description}
          showPostModal={this.openComments} >
        </PageBottom>
        <div className='time'>
          <Moment fromNow>{this.state.createdAt}</Moment>
        </div>
        <div className='new_comm'>
          <div className="new_comm_holder">
            <input
              className='input_comm'
              placeholder="Добавьте комментарий..."
              onChange={this.handleTextChange}
            />
            <div
              className={classNames(
                {
                  "send_com" : comment !== '',
                  "send_active" : comment === ''
                }
              )}
              onClick={this.addNewComment}>
              Опубликовать
            </div>
          </div>
        </div>
        {showModal &&
          <ModalPost
            element={this.props.element}
            close={this.openComments}
            comments={comments}
            addNewComment={this.addNewComment}
            handleTextChange={this.handleTextChange}
          ></ModalPost>}
      </div>
    );
  }
}

export default Post;