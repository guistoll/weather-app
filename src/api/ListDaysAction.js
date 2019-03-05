import getDayOfWeek from '../util/timestampToDayOfWeek';
import getClosestHour from '../util/closestHourFromCurrentTime';

export default function daysList(cityID) {
  const apiKey = '703813eafced915cf373b99e47fcb9f6';
  const urlSearchAPI = 'http://api.openweathermap.org/data/2.5/forecast?id=' + cityID + '&units=metric&APPID=' + apiKey;

  return fetch(urlSearchAPI).then(results => {
    return results.json();
  }).then(data => {
    const cityName = data.city.name;
    const days = {};
    const arrDays = [];

    data.list.map((obj, key) => {
      const date = new Date();
      date.setTime(obj.dt * 1000);
      const objHours = date.getHours();
      const closest = getClosestHour();
      const dayOfWeek = getDayOfWeek(obj.dt, 'long');

      if (closest === objHours) {
        const iconUrl = 'http://openweathermap.org/img/w/' + obj.weather[0].icon + '.png';

        days[dayOfWeek] = {
          dayOfWeek: dayOfWeek.substring(0,3),
          temp_min: Math.round(obj.main.temp_min) + '°',
          temp_max: Math.round(obj.main.temp_max) + '°',
          icon: iconUrl,
          details: {},
        };

        arrDays.push(days[dayOfWeek]);

        const dayDetails = {
          dayOfWeek: dayOfWeek,
          temp: Math.round(obj.main.temp),
          icon: iconUrl,
          description: obj.weather[0].description,
        }
        days[dayOfWeek].details = dayDetails;
      }

      return arrDays;
    });

    return {
      cityName: cityName,
      days: arrDays,
    }
  });
}