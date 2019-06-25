import Comments from '../Comments'
import '../ModalPost/ModalPost.css';
import React from 'react';
var classNames = require('classnames');

export default class View extends React.Component {
  modalRef = null;

  handleClick = (event) => {
    if (this.modalRef !== null && !this.modalRef.contains(event.target))
      this.props.close();
  }

  render() {
    const {
      avatar,
      userName,
      imageUrl,
      comments
    } = this.props;


    return (
      <div id="modal_post" onClick={this.handleClick} >
        <div
          className="modal_cont"
          ref={param => this.modalRef = param}
        >
          <div className='topdiv_add'>
            <div className="ava">
              <img
                className='avatar'
                src={avatar}
                alt="avatar"
              />
              <p className='name'>{userName}</p>
            </div>
            <span className="close" onClick={this.props.close}>
              &times;
        </span>
          </div>
          <div className="img_hold">
            <img
              src={imageUrl}
              alt="avatar"
            />
          </div>
          <Comments
            scrollable={true}
            comments={comments}>
          </Comments>
          <div className='new_comm_modal'>
            <div className="new_comm_holder">
              <input
                className='input_comm'
                placeholder="Добавьте комментарий..."
                onChange={this.props.handleTextChange}
              />
              <div
                className={classNames(
                  {
                    "send_com": this.props.comment !== '',
                    "send_active": this.props.comment === ''
                  }
                )}
                onClick={this.props.addNewComment}>
                Опубликовать
        </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}
