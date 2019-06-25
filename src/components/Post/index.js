import React from 'react';
import PageBottom from '../PageBottom'
import ModalPost from '../ModalPost'
import './Post.css';
import trash from '../../assets/img/trash.png'
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
      if(diff === 1) {this.setState({timestring: "1 месяц назад"}); return;}
      this.setState({
        timestring: diff < 5 ?
          `${diff} месяца назад` :
          `${diff} месяцев назад`
      });
    }
    else if (now.getDate() - createdAt.getDate() >= 1) {
      diff = now.getDate() - createdAt.getDate();
      if(diff === 1) {this.setState({timestring: "1 день назад"}); return;}

      this.setState({
        timestring: diff < 5 ?
          `${diff} дня назад` :
          `${diff} дней назад`
      });
    }
    else if (now.getHours() - createdAt.getHours() >= 1) {
      diff = now.getHours() - createdAt.getHours();
      if(diff === 1) {this.setState({timestring: "1 час назад"}); return;}

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

  createSendStyle = () => {
    return (
      this.state.comment !== '' ?
        'send_com' : 'send_active'
    )
    
  }

  render() {
    const {
      imageUrl,
      avatar,
      userName,
      likes,
      description,
      id } = this.props.element;

    const {
      comments,
      showModal
    } = this.state;

    return (
      <div className="post">
        <div className="post_topblock">
          <div className="group_title">
            <img 
            src={avatar}
            alt="avatar"></img>
            <p>{userName} </p>
          </div>
          <div></div>
          <img 
            className='trash'
            onClick={this.props.dataDelete.bind(this,id)}
            src={trash}
            alt="avatar"
          />
        </div>
        <div className="content">
          <img src={imageUrl} alt="content"></img>
        </div>
        <PageBottom
          className="comments_block"
          comments={comments}
          likes={likes}
          userName={userName}
          description={description}
          showPostModal={this.openComments} >
        </PageBottom>
        <div className='time'>
          {this.state.timestring}
        </div>
        <div className='new_comm'>
          <div className="new_comm_holder">
            <input
              className='input_comm'
              placeholder="Добавьте комментарий..."
              onChange={this.handleTextChange}
            />
            <div
              className={this.createSendStyle()}
              onClick={this.addNewComment}>
              Опубликовать
            </div>
          </div>
        </div>
        {showModal &&
          <ModalPost
            element={this.props.element}
            close={this.openComments}
            comments={comments}
            createSendStyle={this.createSendStyle}
            addNewComment={this.addNewComment}
            handleTextChange={this.handleTextChange}
          ></ModalPost>}
      </div>
    );
  }
}

export default Post;