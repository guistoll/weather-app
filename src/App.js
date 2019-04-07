import React from 'react';
import Autocomplete from './components/Autocomplete'
import Weather from './components/Weather';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
    }
  }

  render() {
    return (
      <div css={{ fontFamily: 'Lato' }}>
        <Autocomplete getCity={(selectedCity) => this.setState({ city: selectedCity })} />
        <ShowWeather city={this.state.city} />
      </div>
    )
  }
}

function ShowWeather(props) {
  const city = props.city;

  if (city) {
    return <Weather key={city} location={city} />
  }

  return '';
}