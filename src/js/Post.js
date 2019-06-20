import React from 'react';
import PageBottom from '../js/PageBottom'
import ModalPost from './ModalPost'
import '../css/Post.css';
import trash from '../assets/img/trash.png'
class Post extends React.Component {

  state = {
    showModal: false,
    comments: this.props.comments,
    comment: ''
  }

  getRandomPic = () => {
    return `https://picsum.photos/id/${Math.floor(Math.random() * 200)}/600/${Math.floor(Math.random() * 200) + 300}`;
  }

  openComments = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  addNewComment = () => {
    if(this.state.comment!=='')
      this.setState({ comments: [...this.state.comments,this.state.comment] })
      
  }

  handleTextChange = (e) => {
    this.setState({ comment: e.target.value })
  }

  componentDidMount = () =>{
    if(this.props.comments == undefined){
      this.setState({comments: []})
    }
  }

  createSendStyle = () =>{
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
      id,
      createdAt } = this.props.element;

    const {
      comments,
      showModal
    } = this.state;

    return (
      <div className="post">
        <div className="post_topblock">
          <div className="group_title">
            <img src={avatar}></img>
            <p>{userName} </p>
            <p>{createdAt} </p>
          </div>
          <div></div>
          <img className='trash'
            onClick={this.props.delPost.bind(this, id)}
            src={trash}></img>
        </div>
        <div className="content">
          <img src={imageUrl}></img>
        </div>
        <PageBottom
          className="comments_plock"
          comments={comments}
          likes={likes}
          userName={userName}
          description={description}
          showPostModal={this.openComments} >
        </PageBottom>
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
            createSendStyle = {this.createSendStyle}
            addNewComment = {this.addNewComment}
            handleTextChange = {this.handleTextChange}
          ></ModalPost>}
      </div>
    );
  }
}

export default Post;