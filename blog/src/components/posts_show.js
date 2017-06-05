import React, { Component } from 'react';
import { connect} from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
  
  componentDidMount() {
    const { id } = this.props.match.params; //react-router
    this.props.fetchPost(id);
    //if (!this.props.post){} don't re-fetch a post
  }

  onDeleteClick() {
    const { id } = this.props.match.params; //react-router

    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });

  }

  render() {
    const { post } = this.props;
    if (!post) {
      return <div>Loading</div>
    }
    return (
      <div>
        <Link className="btn btn-primary" to="/">
          Back
        </Link>
        <button
          className="btn btn-danger float-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
        <h3>{post.attributes.title}</h3>
        <h6>{post.attributes.category}</h6>
        <p>{post.attributes.body}</p>
      </div>
    );
  }
  
}
function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
