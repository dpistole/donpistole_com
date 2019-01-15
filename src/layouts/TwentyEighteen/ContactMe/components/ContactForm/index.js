import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'class-autobind';
import _ from 'lodash';

class ContactForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: {
        name: '',
        email: '',
        phone: '',
        notes: '',
      },
      errors: {
        name: null,
        email: null,
        phone: null,
        notes: null,
      },
      touched: {
        name: null,
        email: null,
        phone: null,
        notes: null,
      },
    }
    autobind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      touched: {
        name: true,
        email: true,
        phone: true,
        notes: true,
      },
    },
  () => {
    this.isFormValid() && this.props.onSubmit(this.state.data);
  });
  }

  isErrored(errors){
    return !(
      _.isNull(errors.name) &&
      _.isNull(errors.email) &&
      _.isNull(errors.phone) &&
      _.isNull(errors.notes)
    );
  }

  isFormValid() {
    const {
      data,
    } = this.state;

    // reset errors
    let nextErrors = {
      name: null,
      email: null,
      phone: null,
      notes: null,
    };
    
    if(_.isEmpty(data.name)){
      nextErrors.name = 'required.';
    }

    if(_.isEmpty(data.email) && _.isEmpty(data.phone)){
      nextErrors.email = 'required.';
    }

    if(_.isEmpty(data.notes)){
      nextErrors.notes = 'required.';
    }

    this.setState({
      ...this.state,
      errors: nextErrors,
    });

    return !this.isErrored(nextErrors);
  }

  handleChange(field, value) {
    this.setState({
      data: {
        ...this.state.data,
        [field]: value,
      },
      touched: {
        ...this.state.touched,
        [field]: true,
      }
    },
    this.isFormValid,
  );
};

  render() {

    const {
      errors,
      touched,
    } = this.state;

    return (
      <div className="contact-me-layout">
        <div className="container">
          <div className="form-container">
            <form onSubmit={this.handleSubmit} name="contact_me" method="POST" noValidate>
              <div className="name-container">
                <label htmlFor="name">name</label>
                <input onChange={(e) => { this.handleChange('name', e.target.value); }} name="name" id="name" type="text" />
                { !_.isNull(errors.name) && touched.name && <span className="validation-error">{errors.name}</span>}
              </div>
              <div className="email-container">
                <label htmlFor="email">email</label>
                <input onChange={(e) => { this.handleChange('email', e.target.value); }} name="email" id="email" type="email" />
                { !_.isNull(errors.email) && touched.email && <span className="validation-error">{errors.email}</span>}
              </div>
              <div className="phone-container">
                <label htmlFor="phone">phone</label>
                <input onChange={(e) => { this.handleChange('phone', e.target.value); }} name="phone" id="phone" type="phone" />
                { !_.isNull(errors.phone) && touched.phone && <span className="validation-error">{errors.phone}</span>}
              </div>
              <div className="notes-container">
                <label htmlFor="notes">what's up?</label>
                <textarea onChange={(e) => { this.handleChange('notes', e.target.value); }} name="notes" id="notes"></textarea>
                { !_.isNull(errors.notes) && touched.notes && <span className="validation-error">{errors.notes}</span>}
              </div>
              <div className="submit-container">
                <button type="Submit">
                  <span>send it</span>
                </button>
              </div>
            </form>
            </div>
        </div>
      </div>
    )
  }
}

ContactForm.propTypers = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
