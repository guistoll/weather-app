import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import DaysInfo from './DaysInfo';
import DayDetails from './DayDetails';

export default class DayList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const days = this.props.days;

    const daysInfo = days && days.map((day, index) =>
      <DaysInfo
        day={day}
        key={index}
        getDay = {() => this.setState({dayDetails: day.details, data: true})}
      />
    );

    return (
      <div css={{fontSize: '14px', maxWidth: '500px', margin: 'auto',}}>
        <Router>
          <NavLink
            css={{
              color: 'black',
              display: 'table',
              margin: '0 auto',
              transition: 'all 0.2s ease',
              ':hover': {
                color: 'red',
              },
            }}
            to={'/'}
            onClick = {() => this.setState({dayDetails: {}, data: false})}
          >
            Clear selection
          </NavLink>
        </Router>
        <div css={{
            padding: '20px 0',
            textAlign: 'center',
          }}
        >
          {daysInfo}
        </div>
        <DayDetails dayDetails={this.state.dayDetails} data={this.state.data}/>
      </div>
    );
  }
}
