import React, { Component } from 'react';
import './index.css';
export default class Header extends Component {
  componentDidMount() {
    console.log('----Header componentDidMount-----');
  }

  render() {
    return (
      <header>
        <div>
          <h1>Egg + React</h1>
        </div>
      </header>
    );
  }
}
