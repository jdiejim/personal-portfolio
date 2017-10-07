import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import ProjectView from './ProjectView';
import About from './About';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <section id="App">
        <Header />
        <Route path="/projects" component={ProjectView} />
        <Route path="/about" component={About} />
      </section>
    );
  }
}

export default App;
