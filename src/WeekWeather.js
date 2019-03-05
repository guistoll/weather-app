import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core'
import CityDetails from './CityDetails';
import DayList from './DayList';
import fetchDaysList from './api/ListDaysAction';

export default class WeekWeather extends React.Component {
  constructor() {
    super();
    this.state = {
      cityName: '',
      days: [{
        dayOfWeek: '',
        max: '',
        min: '',
        icon: '',
        details: {
          dayOfWeek: '',
          temp: '',
          icon: '',
          description: '',
        },
      }],
    }
  }

  componentDidMount() {
    // TODO: Fazer nome/ID da cidade variável
    fetchDaysList('6323074').then(data => {
      this.setState(data);
    });
  }

  render() {
    return (
      <div
        css={{
          fontFamily: 'arial,sans-serif',
          margin: '0 auto',
          maxWidth: '1200px',
        }}
      >
        <CityDetails cityName={this.state.cityName} />
        <DayList days={this.state.days} />
      </div>
    );
  }
}