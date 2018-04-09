import  React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class PostsNew extends Component {

  renderField(field) {

    // const { meta } = field;
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
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

        <div className="text-help">
          {
            // show errors
            touched ? error : ''
          }
        </div>
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