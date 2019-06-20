import React from 'react';
import Comments from './Comments'
import '../css/ModalPost.css';

class ModalPost extends React.Component {
  state = {
    comments: this.props.comments
  }

  modalRef = null;

  handleClick = (event) => {
    if (this.modalRef !== null && !this.modalRef.contains(event.target))
      this.props.close();
  }

  componentDidUpdate(prevProps) {
    if (this.props.comments !== prevProps.comments) {
      this.setState({ comments: this.props.comments })
    }
  }


  render() {
    const { comments } = this.state;
    const {
      avatar,
      userName,
      imageUrl
    } = this.props.element;

    return (
      <div id="modal_post" onClick={this.handleClick} >
        <div
          className="modal_cont"
          ref={param => this.modalRef = param}
        >
          <div className='topdiv_add'>
            <div className="ava">
              <img className='avatar' src={avatar}></img>
              <p className='name'>{userName}</p>
            </div>
            <span className="close" onClick={this.props.close}>
              &times;
            </span>
          </div>
          <div className="img_hold">
            <img src={imageUrl}></img>
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
                className={this.props.createSendStyle()}
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

export default ModalPost;