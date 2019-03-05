import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core'

export default class DayDetails extends React.Component {
  render() {
    const data = this.props.data;
    const dayDetails = this.props.dayDetails || {}; 

    console.log(dayDetails);

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
        <div css={{display: 'flex'}}>
          <div css={{flex: '1'}}>
            <p css={{fontSize: '16px', margin: '0'}}>{dayDetails.dayOfWeek}</p>
            <p 
              css={{
                fontSize: '16px',
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
                <span css={{float: 'left', marginTop: '6px', fontSize: '16px'}}>°C</span>
              </div>
            </div>
          </div>
          <div css={{flex: '1'}}>

          </div>
        </div>
      </div>
    );
  }
}