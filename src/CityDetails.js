import React from 'react';

export default class CityDetails extends React.Component {
  render() {
    return (
      <div 
        style={{
          padding: '20px 0',
        }}
      >
        <p 
          css={{
            fontFamily: 'Helvetica',
            fontSize: '18px',
            fontWeight: '300',
            margin: '0',
            textAlign: 'center',
          }}
        >
          Showing data for: <strong>{this.props.cityName}</strong>
        </p>
      </div>
    );
  }
}
