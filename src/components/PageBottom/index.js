import React from 'react';
import View from './View';

class PageBottom extends React.Component {

  state = {
    comments: [],
    likes: 0,
    liked: false,
    saved: false
  }

  componentDidMount = () => {
    this.setState({
      comments: this.props.comments,
      likes: this.props.likes
    });

  }

  addLike = () => {
    const {
      liked
    } = this.state;

    this.setState({
      likes: liked === false ?
        this.state.likes + 1 : this.state.likes - 1,
      liked: !this.state.liked
    })
  }

  save = () => {
    this.setState({ saved: !this.state.saved });
  }

  render() {
    const {
      comments,
      userName,
      description
    } = this.props;

    const {
      likes, 
      saved,
      liked
    } = this.state;

    return (
    <View
      comments = {comments}
      userName = {userName}
      description = {description}
      liked = {liked}
      saved = {saved}
      likes = {likes}
      showPostModal = {this.props.showPostModal}
      save = {this.props.save}
    />
    );
  }
}

export default PageBottom;