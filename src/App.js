import React, { Component } from 'react';

import Context from './context';

import Layout from './layout';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'dark123',
      name: 'anonymous'
    };
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <Layout />

        <button
          onClick={() => {
            this.setState({
              theme: 'dark456',
              name: 'guest'
            });
          }}
        >
          Change Context
        </button>
      </Context.Provider>
    );
  }
}
