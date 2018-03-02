import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';
import Feed from '../components/Feed';

class FeedCon extends Component {
  componentDidMount() {
    this.props.loadNews()
  }
  render() {
    const eachNews = this.props.news.map(oneNews => {
      return <Feed
              key={oneNews.publishedAt}
              title={oneNews.title}
              image={oneNews.urlToImage}
              url={oneNews.url} />
    });
    return (
      <div>
        {eachNews}
      </div>

    )
  }
}

const mapStateToProps = state => {
  return state
};

export default connect(mapStateToProps, actionCreators)(FeedCon);
