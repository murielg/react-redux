import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';

class PostsNew extends Component {
  renderField(field){
    return (
      <div className="form-group row">
        <label className="col-2 col-form-label">{field.label}</label>
        <div className="col-10">
          <input 
            className="form-control"
            type={field.type}
            {...field.input}
          />
        </div>
      </div> 
    );
  }

  render() {
    return (
      <form>
        <Field 
          label="Title"
          name="title"
          type="text"
          component={this.renderField}
        />
        <Field 
          label="Categories"
          name="categories"
          type="text"
          component={this.renderField}
        />  
        <Field 
          label="Content"
          name="content"
          type="textarea"
          component={this.renderField}
        />     
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
    errors.title = "This is a required field";
  }

  if (!values.content) {
    errors.title = "This is a required field";
  }
  
  return errors;

}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);




