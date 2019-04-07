import React from 'react';

export default class Location extends React.Component {
  render() {
    const location = this.props.location || {};

    return (
      <div>
        <h2
          css={{
            color: '#878787',
            fontWeight: '400',
            margin: '0',
          }}
        >
          {location.name}
        </h2>
        <h4
          css={{
            color: '#878787',
            fontWeight: '400',
            margin: '0',
          }}
        >
          {location.localtime}
        </h4>
      </div>
    );
  }
}