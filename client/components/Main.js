import React from 'react';
import { Link } from 'react-router';
import Header from './Header';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}

