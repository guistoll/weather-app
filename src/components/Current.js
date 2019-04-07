import React from 'react';

export default class Current extends React.Component {
  constructor() {
    super();
    this.state = {
      scale: 'C'
    }
  }

  render() {
    const { current } = this.props || {};
    const scale = this.props.scale;

    const style_h1 = {
      display: 'inline-block',
      fontSize: '60px',
      fontWeight: '400',
      margin: '0',
    }

    const style_h4 = {
      color: '#878787',
      fontWeight: '400',
      margin: '3px 0',
    };

    const style_half_div = {
      padding: '20px 0',
      display: 'inline-block',
      width: '50%'
    }

    return (
      <div>
        <h4 css={style_h4}>
          {current.condition.text}
        </h4>
        <div css={style_half_div}>
          <img alt='' src={current.condition.icon} />
          <div css={{ paddingLeft: '10px', verticalAlign: 'top', display: 'inline-block' }}>
            <h1 css={style_h1}>
              {scale === 'C' ? current.temp_c : current.temp_f}
            </h1>
            <div css={{ display: 'inline-block', paddingTop: '6px', verticalAlign: 'top' }}>
              <button
                onClick={() => this.props.changeScale('C')}
                css={{
                  border: 'none',
                  color: scale === 'C' ? 'black' : '#1a0dab',
                  cursor: 'pointer',
                  fontSize: '16px',
                  padding: 0,
                }}
              >
                °C
              </button>
              &nbsp; | &nbsp;
              <button
                onClick={() => this.props.changeScale('F')}
                css={{
                  border: 'none',
                  color: scale === 'F' ? 'black' : '#1a0dab',
                  cursor: 'pointer',
                  fontSize: '16px',
                  padding: 0,
                }}
              >
                °F
              </button>
            </div>
          </div>
        </div>
        <div css={style_half_div}>
          <h4 css={style_h4}>
            Precipitation: {current.precipitation}
          </h4>
          <h4 css={style_h4}>
            Humidity: {current.humidity}
          </h4>
          <h4 css={style_h4}>
            Wind: {scale === 'C' ? current.wind_kph : current.wind_mph}
          </h4>
        </div>
      </div>
    );
  }
}