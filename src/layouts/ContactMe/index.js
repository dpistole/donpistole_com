import React, { Component } from 'react';
import autobind from 'class-autobind';

import { Link } from 'react-router-dom';
import ContactForm from './components/ContactForm';

class ContactMe extends Component {
  constructor(props){
    super(props);
    this.state = {
      isFormSubmitted: false,
    }
    autobind(this);
  }

  handleFormSubmit(data) {
    this.setState({
      isFormSubmitted: true,
    })
  }

  render() {
    const {
      isFormSubmitted,
    } = this.state;

    return (
      <div className="contact-me-layout">
        <div className="container">
          { 
            !(isFormSubmitted) ?
            <ContactForm onSubmit={this.handleFormSubmit} />
            :
            <div className="thank-you">
              <p>Thanks.</p>
              <p>I'm gonna level with you, the backend for the form isn't set up yet so I won't get your message.</p>
              <p>I really do appreciate you taking the time though. Hopefully we get to discuss it in person someday.</p>
              <div className="thank-you__button-container">
                <Link className="thank-you__button" title="Go Home" to="/">
                  I feel pretty bad, sorry.
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
