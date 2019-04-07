import React from 'react';
import ForecastDay from './ForecastDay';
import ForecastDayDetails from './ForecastDayDetails';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom';

export default class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: ''
    }
  }

  render() {
    const { forecast } = this.props;
    const { scale } = this.props;

    const forecastDay = forecast && forecast.map((weather, index) =>
      <Router key={index}>
        <NavLink
          to={'/' + weather.route}
          onClick={() => this.setState({ route: weather.route })}
          css={{
            boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
            flex: 1,
            margin: '0 5px',
            padding: '7px 0',
            textAlign: 'center',
            transition: 'all 0.3s',
            textDecoration: 'none',
            opacity: 1,
            ':first-of-type': {
              marginLeft: 0
            },
            ':last-of-type': {
              marginRight: 0
            },
            ':hover': {
              opacity: '0.6',
            }
          }}
        >
          <ForecastDay
            weather={weather}
            scale={scale}
          />
        </NavLink>
      </Router>
    );

    return (
      <div css={{ marginTop: '30px' }}>
        <div css={{ display: 'flex' }}>
          {forecastDay}
        </div>
        <Router key={this.state.route}>
          <Route
            exact
            path='/(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)/'
            component={
              props => <ForecastDayDetails
                {...props}
                route={this.state.route}
                forecast={forecast}
                scale={scale}
              />
            }
          />
        </Router>
      </div>
    );
  }
}