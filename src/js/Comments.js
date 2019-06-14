import React from 'react';
import '../css/index.css'
import '../css/PageBottom.css';
import Comments from './Comments'


class PageBottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      likes: 0
    }
  }

  render() {
    return (
      <ul className="ul_comments">
        <li>cdkcld</li>
        <li>dcdc</li>
      </ul>
    );
  }

}


export default PageBottom;