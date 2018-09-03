import React, { Component } from 'react';
import _ from 'lodash';
import autobind from 'class-autobind';
import axios from 'axios';
import config from 'config';

import { Link } from 'react-router-dom';
import ContactForm from './components/ContactForm';

class ContactMe extends Component {
  constructor(props){
    super(props);
    this.state = {
      isFormSubmitted: false,
      isSubmitting: false,
      errorMessage: null,
      successMessage: null,
    }
    autobind(this);
  }

  handleFormSubmit(data) {

    const submitRoute = `${config.api.url}${config.api.version}/contact-me`;
    axios.post(
      submitRoute,
      {
        data: {
          ...data,
          additional_info: data.notes,
        },
      },
    )
    .then((result) => {
      this.setState({
        isFormSubmitted: true,
        isSubmitting: false,
        errorMessage: null,
        successMessage: `Thanks ${_.get(result, ['data', 'data', 'web_lead', 'name'], ' for reaching out')}!`,
      });
    })
    .catch((error) => {
      this.setState({
        isFormSubmitted: false,
        isSubmitting: false,
        errorMessage: 'Hmmm, something went wrong. Try again?',
        successMessage: null,
      });
    });
    ;

    
    this.setState({
      isSubmitting: true,
    });
  }

  render() {
    const {
      isFormSubmitted,
      errorMessage,
      successMessage,
    } = this.state;

    return (
      <div className="contact-me-layout">
        <div className="container">
          {
           errorMessage &&
           <p className="error-message">{ errorMessage }</p> 
          }
          { 
            !(isFormSubmitted) ?
            <ContactForm onSubmit={this.handleFormSubmit} />
            :
            errorMessage === null &&
              <div className="thank-you">
                <p>
                  { successMessage } 
                </p>
                <p>
                  Apprecaite you reaching out, the computers have notified me of your message, I'll check it out ASAP.
                </p>
                <div className="thank-you__button-container">
                  <Link className="thank-you__button" title="Go Home" to="/">
                    Back to the Homepage
                  </Link>
                </div>
              </div>
          }
        </div>
      </div>
    )
  }
}

export default ContactMe;
