import React from 'react';
import '../css/ModalPost.css';

class ModalPost extends React.Component {
  modalRef = null;
  handleClick = (event) => {
    if (this.modalRef !== null && !this.modalRef.contains(event.target))
      this.props.close();
  }

  state = {
    comments: this.props.comments
  }
  render() {
    const { comments } = this.state;
    const {
      avatar,
      userName,
      imageUrl
    } = this.props.element;
    console.log(comments);
    
    return (
      <div id="modal_post" onClick={this.handleClick} >
        <div
          className="modal_content"
          ref={param => this.modalRef = param}
        >
          <div className='topdiv_add'>
            <div>
              <img className='avatar' src={avatar}></img>
              <p className='name'>{userName}</p>
            </div>
            <span className="close" onClick={this.props.close}>
              &times;
            </span>
          </div>
          <img className='avatar' src={imageUrl}></img>
          <div className='comments'>
            <ul className="ul_comments">
              {[...comments].map((el) => (
                <li key={`${el}_${Math.random()}`}>
                  <div className="comment_holder">
                    <div>
                      <div className="comment_body">
                        <h3>Commentator </h3>
                        <span>{el}</span>
                      </div>
                    </div>
                    <div className="like_holder">
                      <div className="with_img little_heart">

                      </div>
                    </div>
                  </div>
                </li>))}
            </ul>
          </div>
        </div>
      </div >
    )
  }
}

export default ModalPost;