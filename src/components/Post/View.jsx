import React from 'react';
import PageBottom from '../PageBottom'
import ModalPost from '../ModalPost'
import './Post.css';
import trash from '../../assets/img/trash.png'
var classNames = require('classnames');



export default class View extends React.Component {
  render() {
    const {
      comments,
      showModal,
      timestring,
      comment,
      element
    } = this.props;

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
          comments={comments}
          likes={likes}
          userName={userName}
          description={description}
          showPostModal={this.props.openComments} >
        </PageBottom>
        <div className='time'>
          {timestring}
        </div>
        <div className='new_comm'>
          <div className="new_comm_holder">
            <input
              className='input_comm'
              placeholder="Добавьте комментарий..."
              onChange={this.props.handleTextChange}
            />
            <div
              className={classNames(
                {
                  "send_com" : comment !== '',
                  "send_active" : comment === ''
                }
              )}
              onClick={this.props.addNewComment}>
              Опубликовать
            </div>
          </div>
        </div>
        {showModal &&
          <ModalPost
            element={element}
            close={this.props.openComments}
            comments={comments}
            addNewComment={this.props.addNewComment}
            handleTextChange={this.props.handleTextChange}
          ></ModalPost>}
      </div>
    );
  }
}
