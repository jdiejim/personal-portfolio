import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import ContactForm from './ContactForm';
import ProjectView from './ProjectView';
import About from './About';
import Skills from './Skills';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contactHidden: true,
    };
    this.handleToggleContact = this.handleToggleContact.bind(this);
  }

  handleToggleContact() {
    this.setState({ contactHidden: !this.state.contactHidden });
  }

  render() {
    const { contactHidden } = this.state;
    const appClass = contactHidden ? 'contact-hidden' : '';
  
    return (
      <section id="App" className={appClass}>
        <Header handleToggleContact={this.handleToggleContact} />
        <ContactForm handleToggleContact={this.handleToggleContact} />
        <Route path="/projects" component={ProjectView} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
      </section>
    );
  }
}

export default App;
