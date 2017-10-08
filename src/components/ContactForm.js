import React, { Component } from 'react';
import './styles/ContactForm.css';

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      message: '',
    };
  }

  render() {
    const { handleToggleContact } = this.props;

    return (
      <aside id="contact-form-wrapper">
        <button className="close-contact-form" onClick={handleToggleContact}>Close</button>
        <h2 className="contact-form-title">Contact Information</h2>
        <form className="contact-form" action="https://formspree.io/jdiejim@gmail.com" method="POST">
          <input className="contact-input" type="text" name="name" placeholder="Enter name" />
          <input required className="contact-input" type="email" name="_replyto" placeholder="Enter email" />
          <textarea className="contact-textarea" name="message" placeholder="Enter message" />
          <input type="hidden" name="_next" value="/#thanks" />
          <button className="contact-btn" type="submit">Submit</button>
        </form>
      </aside>
    );
  }
}

export default ContactForm;
