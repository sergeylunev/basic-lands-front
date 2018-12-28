import React, { Component } from 'react';
import './App.css';
import Cards from '../Cards/Cards';
import { Container, } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container>
        <Cards />
      </Container>
    );
  }
}

export default App;
