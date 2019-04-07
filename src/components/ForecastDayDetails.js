import React from 'react';

export default class ForecastDayDetails extends React.Component {
  render() {
    const { route } = this.props || '';
    const { forecast } = this.props || {};
    const { scale } = this.props;
    var details = {};

    forecast && forecast.filter(obj => {
      return obj.route === route;
    }).map(obj => {
      details = obj.details;
      return '';
    });

    const style_headers = {
      color: '#878787',
      fontWeight: '400',
      margin: '5px 0',
    }

    return (
      <div css={{ display: route ? 'block' : 'none', padding: '30px' }}>
        <h4 css={style_headers}> {details.dayOfWeek} - {scale === 'C' ? details.date_br : details.date_us}</h4>
        <h4 css={style_headers}>{details.description}</h4>
        <h4 css={style_headers}>Humidity: {details.avghumidity}</h4>
        <h4 css={style_headers}>Temperature: {scale === 'C' ? details.avgtemp_c : details.avgtemp_f}</h4>
      </div>
    );
  }
}