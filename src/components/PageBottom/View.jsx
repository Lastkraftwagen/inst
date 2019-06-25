import React from 'react';
import '../../css/index.css'
import './PageBottom.css';
import Comments from '../Comments'
var classNames = require('classnames');


class View extends React.Component {

  render(){

    const {
      comments,
      userName,
      description,
      likes,
      liked,
      saved
    } = this.props;
    
    return (
      <div className="comments_block">
        <div className="like_panel">
          <span>
            <button
              onClick={this.props.addLike}
              className={classNames({
                'with_img': true,
                'heart_red': liked,
                'heart': !liked
              })}>
            </button>
          </span>
          <span>
            <button
              onClick={this.props.showPostModal}
              className="with_img comment">
            </button>
          </span>
          <span>
            <button className="with_img share"></button>
          </span>
          <span>
            <button
              className={classNames({
                'with_img': true,
                'save_black': saved,
                'save': !saved
              })}
              onClick={this.props.save}
            ></button>
          </span>
        </div>
        <div className="likes_counter">
          <p>
            {likes} отметок "Нравится"
          </p>
        </div>
        {description !== '' &&
          (<div className="post_descr">
            <h2> {userName}</h2>
            <p> {description}</p>
          </div>)
        }
        <div
          className="comments_holder"
          style={{display: !comments ? 'none' : 'flex'}}
        >
          <Comments
            scrollable={false}
            comments={comments}
            showPostModal={this.props.showPostModal}>
          </Comments>
        </div>
        <div className="my_comment">
          
        </div>
      </div>
    );
  }
}



export default View;