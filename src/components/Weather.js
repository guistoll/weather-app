import React from 'react';
import fetchWeekWeather from '../api/ListWeekWeather';
import Location from './Location';
import Current from './Current';
import Forecast from './Forecast';

export default class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      scale: 'C',
      location: {},
      current: {
        condition: {},
      },
      forecast: [{}],
    }
  }

  componentDidMount(error) {
    const locationSearch = this.props.location;

    fetchWeekWeather(locationSearch).then(data => {
      this.setState(data);
    });
  };

  render() {
    return (
      <div
        css={{
          border: '1px solid #dfe1e5',
          borderRadius: '8px',
          margin: '0 auto',
          marginTop: '40px',
          maxWidth: '640px',
          padding: '20px  16px',
          width: '100%',
        }}
      >
        <Location location={this.state.location} />
        <Current scale={this.state.scale} changeScale={(scale) => this.setState({ scale: scale })} current={this.state.current} />
        <Forecast scale={this.state.scale} forecast={this.state.forecast} />
      </div>
    );
  }
}