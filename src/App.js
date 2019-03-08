import React from 'react';
import WeekWeather from './WeekWeather';
import cities from './api/cities.list.json';

export default class App extends React.Component {

  componentDidMount() {
    const arrCountry = [];

    cities.map((obj, key) => {
      if (!arrCountry[obj.country]) {
        arrCountry[obj.country] = [];
      }

      const city = {
        id: obj.id,
        name: obj.name,
      }

      arrCountry[obj.country].push(city);

      return arrCountry;
    });

    arrCountry.map((o, k) => {
      console.log(k);
    });

    console.log(arrCountry);

    // arrCountry[['AD']].sort(function (a, b) {
    //   return a.name.toString().localeCompare(b.name);
    // };

    // const json = JSON.stringify(arrCountry);

    // console.log(json);
  } 

  render() {
    return (
      <div>
        <WeekWeather />
      </div>
    )
  }
}