import React from 'react';
import '../css/Post.css';

class Post extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   elements: []
    // }
  }


  render(){
    console.log(this.props.elements);
    

    return(
      <div className="post">
        <div className="post_topblock">

        </div>
        <div className="content">

        </div>
        {/* <Comments></Comments> */}
      </div>
    );
  }
}

export default Post;