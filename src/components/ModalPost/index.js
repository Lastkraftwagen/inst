import React from 'react';
import View from './View'

class ModalPost extends React.Component {
  state = {
    comments: this.props.comments
  }

  componentDidUpdate(prevProps) {
    if (this.props.comments !== prevProps.comments) {
      this.setState({ comments: this.props.comments })
    }
  }


  render() {
    const { 
      comments 
    } = this.state;

    const {
      avatar,
      userName,
      imageUrl
    } = this.props.element;
    
    const{
      createSendStyle,
      handleTextChange,
      addNewComment,
      close
    } = this.props;

    return (
      <View 
      avatar={avatar}
      userName={userName}
      imageUrl={imageUrl}
      comments={comments}
      createSendStyle = {createSendStyle}
      handleTextChange = {handleTextChange}
      addNewComment = {addNewComment}
      close = {close}
      />
    )
  }
}

export default ModalPost;