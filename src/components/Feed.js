import React, { Component } from 'react';
import './Feed.css';

class Feed extends Component {
  render() {
    return (
      <div className='Feed'>
        <img src={this.props.image} alt="" />
        <p>{this.props.title}</p>
        <a href={this.props.url} target='_blank'>Read more</a>
      </div>
    )
  }
}

export default Feed;
