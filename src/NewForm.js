import React from 'react'
import { Field, reduxForm } from 'redux-form'

const submit = (values) => {
  console.log(values)
}

const renderField = (field) => (
  <div className="input-row">
    <input {...field.input} type="text"/>
    {field.meta.touched && field.meta.error &&
     <span className="error">{field.meta.error}</span>}
  </div>
)

const ContactFormFunction = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

//handleSubmit ->function that is is called when we submit the function

// Use contactForm as a function istead of a class and handle the submit inside the function so that it can be used anywhere in the project. only uses class if component needs to change state within that component

// custom fields -> create a function called renderfield

const ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactFormFunction)

export default ContactForm