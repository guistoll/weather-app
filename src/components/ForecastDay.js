import React from 'react';

export default class ForecastDay extends React.Component {
  render() {
    const weather = this.props.weather || {};
    const scale = this.props.scale;

    return (
      <div>
        <div>
          <h4 css={{ color: '#878787', fontWeight: '100', margin: '0', fontSize: '14px' }}>
            {weather.dayOfWeek}
          </h4>
          <img
            css={{ width: '50px', height: '50x', display: 'block', margin: '0 auto' }}
            alt=''
            src={weather.icon}
          />
          <h4 css={{ color: '#878787', fontWeight: '100', margin: '0', fontSize: '14px', paddingRight: '5px', display: 'inline-block' }}>
            {scale === 'C' ? weather.maxtemp_c : weather.maxtemp_f}
          </h4>
          <h4 css={{ color: '#bababa', fontWeight: '100', margin: '0', fontSize: '14px', display: 'inline-block' }}>
            {scale === 'C' ? weather.mintemp_c : weather.mintemp_f}
          </h4>
        </div>
      </div>
    );
  }
}