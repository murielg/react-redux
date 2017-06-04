import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost} from '../actions';

class PostsNew extends Component {
  renderField(field){
    const { meta: { touched, error } } = field;
    const formClassName = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={formClassName}>
        <label className="col-2 col-form-label">{field.label}</label>
        <div className="col-10">
          <input 
            className="form-control"
            type={field.type}
            {...field.input}
          />
        </div>
        <div className="form-text">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;
  
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
        <Field 
          label="Title"
          name="title"
          type="text"
          component={this.renderField}
        />
        <Field 
          label="Categories"
          name="category"
          type="text"
          component={this.renderField}
        />  
        <Field 
          label="Content"
          name="body"
          type="textarea"
          component={this.renderField}
        />  
        <Field
          label="User ID"
          name="user_id"
          type="text"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">
          Create Post
        </button>
        <Link className="btn btn-danger" to="/">
          Cancel
        </Link>
      </form>
    );
  }

}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "This is a required field";
  }
  if (!values.categories) {
    errors.categories = "This is a required field";
  }

  if (!values.content) {
    errors.content = "This is a required field";
  }
  
  return errors;

}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null,{ createPost })(PostsNew)
);
