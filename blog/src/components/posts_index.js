import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getToken, fetchPosts } from '../actions';


class PostsIndex extends Component {
  componentDidMount() {
    //TODO: fix authentication 
    //this.props.getToken();
    //automatically called by react when component gets added to the dom
    this.props.fetchPosts();
    //
  }

  renderPosts() {
    console.log('render', this.props.posts);
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>{post.attributes.title}</li>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          { this.renderPosts() }          
        </ul>
      </div>
    );
  }
}
// whwnwver we need to consume from app level state do this
function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { getToken, fetchPosts })(PostsIndex);

