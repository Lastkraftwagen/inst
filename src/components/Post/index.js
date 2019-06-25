import React from 'react';
import View from './View'
class Post extends React.Component {

  state = {
    showModal: false,
    comments: this.props.comments,
    comment: '',
    createdAt: this.props.element.createdAt,
    timestring: ''
  }
  openComments = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  addNewComment = () => {
    if (this.state.comment !== '')
      this.setState({ comments: [...this.state.comments, this.state.comment] })
  }

  handleTextChange = (e) => {
    this.setState({ comment: e.target.value })
  }

  componentDidMount = () => {
    if (this.props.comments === undefined) {
      this.setState({ comments: [] })
    }
    this.getDateDifference();
  }

  getDateDifference = () => {
    let now = new Date()
    let createdAt = new Date(this.state.createdAt);
    let diff;
    if (now.getFullYear() - createdAt.getFullYear() >= 1) {
      this.setState({ timestring: "больше года назад" });
    }
    else if (now.getMonth() - createdAt.getMonth() > 1) {
      diff = now.getMonth() - createdAt.getMonth();
      if (diff === 1) { this.setState({ timestring: "1 месяц назад" }); return; }
      this.setState({
        timestring: diff < 5 ?
          `${diff} месяца назад` :
          `${diff} месяцев назад`
      });
    }
    else if (now.getDate() - createdAt.getDate() >= 1) {
      diff = now.getDate() - createdAt.getDate();
      if (diff === 1) { this.setState({ timestring: "1 день назад" }); return; }

      this.setState({
        timestring: diff < 5 ?
          `${diff} дня назад` :
          `${diff} дней назад`
      });
    }
    else if (now.getHours() - createdAt.getHours() >= 1) {
      diff = now.getHours() - createdAt.getHours();
      if (diff === 1) { this.setState({ timestring: "1 час назад" }); return; }

      this.setState({
        timestring: diff < 5 ?
          `${diff} часа назад` :
          `${diff} часов назад`
      });
    }
    else if (now.getMinutes() - createdAt.getMinutes() > 1) {
      diff = now.getMinutes() - createdAt.getMinutes();
      this.setState({
        timestring: diff < 5 ?
          `${diff} минуты назад` :
          `${diff} минут назад`
      });
    }
    else {
      this.setState({ timestring: "только что" });
    }
  }

  render() {
    const {
      comments,
      showModal,
      timestring, 
      comment
    } = this.state;

    return (
      <View
        comments = {comments}
        showModal = {showModal}
        dataDelete = {this.props.dataDelete}
        timestring = {timestring}
        comment = {comment}
        handleTextChange={this.handleTextChange}
        openComments={this.openComments}
        addNewComment ={this.addNewComment}
        element={this.props.element}
      />
    );
  }
}

export default Post;