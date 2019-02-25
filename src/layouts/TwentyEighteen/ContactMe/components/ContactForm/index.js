import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from 'formik';
import * as Yup from 'yup';

const MATCH_PHONE = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters.')
    .max(30, 'Less than 30 characters please.')
    .required('Name is required.'),
  phone: Yup.string()
    .matches(MATCH_PHONE, 'Valid phone numbers only please.')
    .max(30, 'Less than 30 characters please.'),
  email: Yup.string()
    .email('valid email addresses only please.')
    .max(30, 'Less than 30 characters please.')
    .required('Email is required.'),
  notes: Yup.string()
    .min(3, 'At least 3 characters.')
    .max(140, 'Less than 140 characters please.')
    .required('Don\'t be shy.'),
});

const ContactForm = (props) => (
  <div className="container">
    <div className="contact-me-layout">
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          notes: '',
        }}
        validationSchema={ContactFormSchema}
        onSubmit={(values) => {
          props.onSubmit({
            ...values,
            phone: _.isEmpty(values.phone) ? null : values.phone,
          });
        }}
      >
        {({ isSubmitting }) => (
          <div className="form-container">
            <Form>
              <div className="input-group">
                <label htmlFor="name">name</label>
                <Field type="input" name="name" />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="error"
                />
              </div>
              <div className="input-group">
                <label htmlFor="phone">phone</label>
                <Field type="input" name="phone" />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="error"
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">email</label>
                <Field type="input" name="email" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error"
                />
              </div>
              <div className="textarea-group">
                <label htmlFor="notes">notes</label>
                <Field component="textarea" name="notes" id="notes" />
                <ErrorMessage
                  name="notes"
                  component="div"
                  className="error"
                />
              </div>
              <div className="submit-container">
                <button type="submit" disabled={isSubmitting}>
                  <span>send it</span>
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  </div>
);

ContactForm.propTypers = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
