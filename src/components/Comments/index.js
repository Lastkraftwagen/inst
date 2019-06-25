import React from 'react';
import './Comments.css'
import '../ModalPost/ModalPost.css';

class Comments extends React.Component {

  state = {
    comments: this.props.comments
  }

  componentDidUpdate(prevProps) {
    if (this.props.comments !== prevProps.comments) {
      this.setState({ comments: this.props.comments })
    }
  }

  showLessComments = () => {
    const {
      comments
    } = this.state;

    return (
      <div className="ul_comments">
        {[...comments].map((element) => (
          <div className="li_comment" key={`${element}_${Math.random()}`}>
            <div className="comment_holder">
              <div className="comment_body">
                <h3>Commentator </h3>
                <div className='ddsds'>{element}</div>
              </div>
              <div className="like_holder">
                <div className="with_img little_heart">
                </div>
              </div>
            </div>
          </div>))}
      </div>
    );
  }

  showMoreComments = () => {
    const {
      comments
    } = this.state;

    return (
      <div className="ul_comments">
        <div
          className="show_all_comments"
          onClick={this.props.showPostModal}>
          Показать все комментарии ({comments.length})
        </div>
        {[...comments].map((element, index) => (
          index < 3 ? (
            <div
              className="li_comment"
              key={`${element}_${Math.random()}`}
            >
              <div className="comment_holder">
                <div>
                  <div className="comment_body">
                    <h3>Commentator </h3>
                    <div className='ddsds'>{element}</div>
                  </div>
                </div>
                <div className="like_holder">
                  <div className="with_img little_heart">
                  </div>
                </div>
              </div>
            </div>)
            :
            null))
        }
      </div>
    );
  }

  showScrollComments = () => {
    const {
      comments
    } = this.state;

    return (
      <div className='comments'>
        <div className="ul_comments">
          {comments.map((el) => (
            <div className="li_comment" key={`${el}_${Math.random()}`}>
              <div className="comment_holder">
                <div>
                  <div className="comment_body">
                    <h3>Commentator </h3>
                    <div className='ddsds'>{el}</div>
                  </div>
                </div>
              </div>
            </div>))}
        </div>
      </div>
    )
  }

  render() {
    const { comments } = this.state;
    if (comments === undefined) {
      return (
        <ul></ul>
      );
    }
    else if (this.props.scrollable === false) {
      if (comments.length <= 3) {
        return this.showLessComments();
      }
      else if (comments.length > 3) {
        return this.showMoreComments();
      }
    }
    else if (this.props.scrollable === true) {
      return this.showScrollComments();
    }
    return (<ul></ul>)
  }

}


export default Comments;