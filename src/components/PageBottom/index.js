import React from 'react';
import '../../css/index.css'
import './PageBottom.css';
import Comments from '../Comments'
var classNames = require('classnames');

class PageBottom extends React.Component {

  state = {
    comments: [],
    likes: 0,
    liked: false,
    saved: false
  }

  commentsStyle = () => {
    return {
      display: this.props.comments === undefined ?
        'none' : 'flex'
    }
  }

  componentDidMount = () => {
    this.setState({ comments: this.props.comments });
    this.setState({ likes: this.props.likes });
  }

  addLike = () => {
    const {
      liked
    } = this.state;

    this.setState({ likes: liked === false ? 
      this.state.likes + 1 : this.state.likes - 1,
      liked: !this.state.liked
    })
  }

  save = () => {
    this.setState({ saved: !this.state.saved });
  }

  createLikePanel = () => {
    return (
      <div className="like_panel">
        <span>
          <button
            onClick={this.addLike}
            className={classNames({
              'with_img': true,
              'heart_red': this.state.liked,
              'heart': !this.state.liked
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
              'save_black': this.state.saved,
              'save': !this.state.saved
            })}
            onClick={this.save}
          ></button>
        </span>
      </div>
    )
  }

  render() {
    const {
      comments,
      userName,
      description
    } = this.props;

    const {
      likes
    } = this.state;

    return (
      <div className="comments_block">
        {this.createLikePanel()}
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
        <div className="comments_holder" style={this.commentsStyle()}>
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


export default PageBottom;