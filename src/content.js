import React from 'react';
import Context from './context';

export default function Content(props) {
  return (
    <Context.Consumer>
      {({ name, theme }) => (
        <div>
          <h3>Content</h3>
          <div>Name: {name}</div>
          <div>Theme: {theme}</div>
        </div>
      )}
    </Context.Consumer>
  );
}
