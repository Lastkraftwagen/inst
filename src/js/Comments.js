import React from 'react';
import '../css/index.css'

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
    return (
      <ul className="ul_comments">
        {[...comments].map((element) => (
      <li key={++i}>{element}</li>))}
    </ul>
    );
  }

}


export default Comments;