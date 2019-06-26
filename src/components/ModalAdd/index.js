import React from 'react';
import './AddingModal.css';
import avatar from '../../assets/img/avatar.png'
var classNames = require('classnames');

class ModalAdd extends React.Component {

  modalRef = null;
  myFormRef = null;

  state = {
    userName: 'yar_ki',
    file: '',
    fileURL: '',
    descr: '',
    onDrag: false
  }

  handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    let droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 1) {
      alert('Буде вибрано лише один файл!');
    }
    this.handleFiles([...droppedFiles])
  }

  dragOn = (e) => {
    e.preventDefault()
    e.stopPropagation()
    this.setState({
      onDrag: true 
    });
  }
  dragOff = (e) => {
    e.preventDefault()
    e.stopPropagation()
    this.setState({ 
      onDrag: false 
    });
  }

  handleClick = (event) => {
    if (this.modalRef !== null && !this.modalRef.contains(event.target))
      this.props.close();
  }
  
  handleFiles = (files) => {
    this.setState({ onDrag: false });

    let reader = new FileReader();
    let file = files[0];

    if (!file.type.startsWith('image/')) {
      alert('Виберіть картинку будь ласка!');
      this.setState({
        file: "",
        fileURL: ""
      });
      this.myFormRef !== null ?
        this.myFormRef.reset() : console.log("problem with Ref");
        ;
      return;
    }
    reader.onloadend = () => {
      this.setState({
        file: file,
        fileURL: reader.result
      });
    }

    reader.readAsDataURL(file);
  }

  handleChange = (e) => {
    this.setState({ 
      descr: e.target.value 
    });
  }

  saveChanges = (e) => {
    let item = {
      imageUrl: this.state.fileURL,
      createdAt: new Date().toISOString(),
      likes: 0,
      userName: "yar_ki",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/louis_currie/128.jpg",
      description: this.state.descr,
      comments: []
    }
    this.props.postItem(item);
    this.props.close();
  }

  render() {
    const {
      userName
    } = this.state;
    let {
      fileURL
    } = this.state;

    let image;
    if (fileURL) {
      image = (<img className='actual_img' alt='avatar' src={fileURL} />);
    } else {
      image = (<div className="prev_img">IMAGE</div>);
    }

    return (
      <div className="modal" onClick={this.handleClick} >
        <div
          className="modal_content"
          ref={param => this.modalRef = param}
        >
          <div className='topdiv_add'>
            <div>
              <img
                className='avatar'
                src={avatar}
                alt='avatar'
              ></img>
              <p className='name'>{userName}</p>
            </div>
            <div></div>
            <span className="close" onClick={this.props.close}>
              &times;
            </span>
          </div>
          <div className='edit_page'>
            <div
              id="drop_area"
              className={classNames({
                'highlight': this.state.onDrag
              })}
              onDragEnter={this.dragOn}
              onDragOver={this.dragOn}
              onDragLeave={this.dragOff}
              onDrop={this.handleDrop}
            >
              <form ref={el => this.myFormRef = el}>
                <input
                  type="file"
                  id="fileElem"
                  accept="image/*"
                  onChange={(e) => {
                    this.handleFiles(e.target.files)
                  }}></input>
                <label id='fakeButton' className='button'>
                  или перетащите сюда фото
                </label>
              </form>
            </div>
            {image}
            <div className="down_descr">
              <textarea
                onChange={this.handleChange}
                placeholder="Введіть тут опис картинки"
              />
              <span className="add" onClick={this.saveChanges}>
                &#10004;
            </span>
            </div>
          </div>

        </div>
      </div >
    )
  }
}
export default ModalAdd;