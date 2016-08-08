import React, { PropTypes } from 'react';

const propTypes = {'working': 'testing'};

const defaultProps = {};

export default class Foo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="foo" />
    );
  }
}

Foo.propTypes = propTypes;
Foo.defaultProps = defaultProps;
