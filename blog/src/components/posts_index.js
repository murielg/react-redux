import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';


class PostsIndex extends Component {
  componentDidMount() {
    //automatically called by react when component gets added to the dom
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <h1>Posts Index</h1>
      </div>
    );
  }
}
export default connect(null, { fetchPosts })(PostsIndex);

