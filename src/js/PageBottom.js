import React from 'react';
import '../css/index.css';
import '../css/PageBottom.css';
import Comments from './Comments';

class PageBottom extends React.Component {
  state = {
    comments: [],
    likes: 0,
    liked: false,
    saved: false,
  };

  commentsStyle = () => {
    return {
      display: this.props.comments === undefined ? 'none' : 'flex',
    };
  };

  componentDidMount = () => {
    this.setState({
      likes: this.props.likes,
      comments: this.props.comments,
    });
  };

  addLike = () => {
    const { liked } = this.state;

    this.setState({
      likes: liked ? this.state.likes + 1 : this.state.likes - 1,
      liked: !this.state.liked,
    });
  };

  save = () => {
    this.setState({
      saved: !this.state.saved,
    });
  };

  getHeartClass = () => {
    return this.state.liked ? 'with_img heart_red' : 'with_img heart';
  };
  getSaveClass = () => {
    return this.state.saved ? 'with_img save_black' : 'with_img save';
  };

  createLikePanel = () => {
    return (
      <div className="like_panel">
        <span>
          <button onClick={this.addLike} className={this.getHeartClass()} />
        </span>
        <span>
          <button
            onClick={this.props.showPostModal}
            className="with_img comment"
          />
        </span>
        <span>
          <button className="with_img share" />
        </span>
        <span>
          <button className={this.getSaveClass()} onClick={this.save} />
        </span>
      </div>
    );
  };

  render() {
    const { comments, userName, description } = this.props;

    const { likes } = this.state;

    return (
      <div className="comments_block">
        {this.createLikePanel()}
        <div className="likes_counter">
          <p>{likes} отметок "Нравится"</p>
        </div>
        {description != '' && (
          <div className="post_descr">
            <h2> {userName}</h2>
            <p> {description}</p>
          </div>
        )}
        <div className="comments_holder" style={this.commentsStyle()}>
          <Comments
            scrollable={false}
            comments={comments}
            showPostModal={this.props.showPostModal}
          />
        </div>
        <div className="my_comment" />
      </div>
    );
  }
}

export default PageBottom;
