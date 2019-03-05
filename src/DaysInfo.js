import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
/** @jsx jsx */
import { jsx } from '@emotion/core'

export default class DaysInfo extends React.Component {
  render() {
    const day = this.props.day || {};

    return (
      <Router>
        <NavLink
          to={'/'+day.dayOfWeek}
          onClick={this.props.getDay}
        >
          <div
            css={{
              border: '0 solid #e9e9e9',
              display: 'inline-block',
              margin: '0 10px',
              padding: '5px',
              textAlign: 'center',
              transform: 'scale(0.95)',
              transition: 'all 0.3s ease-out',
              ':hover': {
                background: '#fcfcfc',
                border: '1px solid #e9e9e9',
                transform: 'scale(1)',
              },
            }}
          >
            <p css={{color: '#bababa', margin: '0',}}>
              {day.dayOfWeek}
            </p>
            <img alt="" src={day.icon} />
            <div>
              <p css={{color: '#878787', display: 'inline-block', margin: '0 5px',}}>
                {day.temp_max}
              </p>
              <p css={{color: '#bababa', display: 'inline-block', margin: '0 5px'}}>
                {day.temp_min}
              </p>
            </div>
          </div>
        </NavLink>
      </Router>
    );
  }
}
