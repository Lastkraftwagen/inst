import React from 'react';
import '../css/index.css'
import '../css/PageBottom.css';
import Comments from './Comments'


class PageBottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      likes: 0
    }
  }

  render() {
    return (
      <div className="comments_block">
        <div className="like_panel">
          <span>
            <button className="with_img heart"></button>
          </span>
          <span>
            <button className="with_img comment"></button>
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
          {this.props.likes} отметок "Нравится"
          </p>
        </div>
        <div className="post_descr">
          <h2> {this.props.userName}</h2>
          <p> {this.props.description}</p>
        </div>
        <div class="comments_holder">
          <Comments></Comments>
        </div>
        <div class = "my_comment">

        </div>
      </div>
    );
  }

}


export default PageBottom;