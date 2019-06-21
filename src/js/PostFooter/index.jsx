import React, { Component } from 'react'
import View from './view';

export default class PostFooter extends Component {

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



  render() {
    return (
      <View  />
    )
  }
}
