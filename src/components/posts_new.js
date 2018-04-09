import  React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class PostsNew extends Component {

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
          // {...field.input} =
          // onChange={field.input.onChange}
          // onFocus={field.input.onFocus}
          // onBlur={field.input.onBlur}
        />

        {
          // show errors
          field.meta.error
        }
      </div>
    )
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {

    const  { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title For Post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />

        <button type="submit" className="btn btn-primary">Submit</button>

      </form>
    );
  }
}

function validate(values) {
  // console.log(value) -> { title: 'sds', categories: 'fdsdf', content: 'hggh }

  const errors = {};

  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title thet is at least 3 characters!";
  }

  if (!values.categories) {
    errors.categories = "Enter some categories"
  }

  if (!values.content) {
    errors.content = "Enter some content please"
  }

  return errors;

}

export  default reduxForm({
  // validate: validate,
  validate,
  form: 'PostsNewForm'
})(PostsNew);