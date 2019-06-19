import React from 'react';
import '../css/index.css'
import '../css/Comments.css'

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments
    }

  }

  render() {
    const { comments } = this.state;
    let i = 0;
    if (comments === undefined) {
      return (
        <ul></ul>
      );
    }
    else if (comments.length <= 3) {
      return (
        <ul className="ul_comments">
          {[...comments].map((element) => (
            <li key={`${element}_${Math.random()}`}>
              <div className="comment_holder">
                <div>
                  <div className="comment_body">
                    <h3>Commentator </h3>
                    <span>{element}</span>
                  </div>
                </div>
                <div className="like_holder">
                  <div className="with_img little_heart">

                  </div>
                </div>
              </div>
            </li>))}
        </ul>
      );
    }
    else {
      return (
        <ul className="ul_comments">
          {[...comments].map((element, index) => (
            index < 3 ? (
              <li key={`${element}_${Math.random()}`}>
                <div className="comment_holder">
                  <div>
                    <div className="comment_body">
                      <h3>Commentator </h3>
                      <span>{element}</span>
                    </div>
                  </div>
                  <div className="like_holder">
                    <div className="with_img little_heart">
                    </div>
                  </div>
                </div>
              </li>)
              :
              null))
          }
          <li onClick={this.props.showPostModal}>Ще...</li>
        </ul>
      );
    }
  }

}


export default Comments;