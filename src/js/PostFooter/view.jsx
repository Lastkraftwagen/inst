import React, { Component } from 'react'

export default class View extends Component {
  render() {
    return (
<div className="comments_block">
        {this.createLikePanel()}
        <div className="likes_counter">
          <p>{likes} отметок "Нравится"</p>
        </div>
        {description != '' && (
          <div className="post_descr">
            <h2> {userName}</h2>
            <p> {description}</p>
          </div>
        )}
        <div className="comments_holder" style={this.commentsStyle()}>
          <Comments
            scrollable={false}
            comments={comments}
            showPostModal={this.props.showPostModal}
          />
        </div>
        <div className="my_comment" />
      </div>
    )
  }
}
