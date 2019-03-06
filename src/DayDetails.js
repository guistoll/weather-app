import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core'

export default class DayDetails extends React.Component {
  render() {
    const data = this.props.data;
    const dayDetails = this.props.dayDetails || {}; 

    return (
      <div
        css={{
          border: '1px solid #bababa',
          borderRadius: '5px',
          color: '#878787',
          display: data ? 'block' : 'none',
          padding: '20px 15px',
        }}
      >
        <div css={{display: 'flex', fontSize: '16px'}}>
          <div css={{flex: '1'}}>
            <p css={{margin: '0'}}>{dayDetails.dayOfWeek}</p>
            <p 
              css={{
                margin: '0',
                textTransform: 'capitalize',
              }}
            >
              {dayDetails.description}
            </p>
            <div css={{marginTop: '20px'}}> 
              <img 
                css={{
                  float: 'left',
                  height: '64px',
                  width: '64px',
                }} 
                alt='' 
                src={dayDetails.icon}>
              </img>
              <div css={{color: 'black',}}>
                <p  
                  css={{
                    float: 'left',
                    fontSize: '58px',
                    fontWeight: '400',
                    margin: '-3px 0 0 0',
                    paddingLeft: '10px',
                  }}
                >
                  {dayDetails.temp}
                </p>
                <span css={{float: 'left', marginTop: '6px'}}>°C</span>
              </div>
            </div>
          </div>
          <div css={{flex: '1', borderLeft: '1px solid #bababa', paddingLeft: '40px', margin: 'auto 0',}}>
            <p>Humidity: <span>{dayDetails.humidity}%</span></p>
            <p>Wind: <span>{dayDetails.wind} km/h</span></p>
          </div>
        </div>
      </div>
    );
  }
}