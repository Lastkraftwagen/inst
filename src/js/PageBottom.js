import React from 'react';
import '../css/index.css'
import '../css/PageBottom.css';
import Comments from './Comments'


class PageBottom extends React.Component {

  state = {
    comments: [],
    likes: 0,
    liked: false
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
    const { liked } = this.state;
    if (liked === false) {
      this.setState({ likes: this.state.likes + 1 })
    }
    else {
      this.setState({ likes: this.state.likes - 1 })
    }
    this.setState({ liked: !this.state.liked })
  }


  getHeartClass = () => {
    return this.state.liked ? "with_img heart_red" : "with_img heart";
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
        <div className="like_panel">
          <span>
            <button
              onClick={this.addLike}
              className={this.getHeartClass()}>
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
            <button className="with_img save"></button>
          </span>
        </div>
        <div className="likes_counter">
          <p>
            {likes} отметок "Нравится"
          </p>
        </div>
        <div className="post_descr">
          <h2> {userName}</h2>
          <p> {description}</p>
        </div>
        <div className="comments_holder" style={this.commentsStyle()}>
          <Comments 
            comments={comments} 
            showPostModal={this.props.showPostModal}></Comments>
        </div>
        <div className="my_comment">
        </div>
      </div>
    );
  }

}


export default PageBottom;