import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import ProjectView from './ProjectView';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <section id="App">
        <Header />
        <Route path="/projects" component={ProjectView} />
      </section>
    );
  }
}

export default App;
