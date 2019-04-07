import axios from 'axios';
import apiKey from '../api/ApiKey';
import getDayOfWeek from '../util/timestampToDayOfWeek';

export default function weekWeather(locationSearch) {
  const searchUrl = 'http://api.apixu.com/v1/forecast.json?key=' + apiKey + '&q=' + locationSearch + '&days=7';

  return axios.get(searchUrl).then(result => {
    var location = result.data.location;
    var current = result.data.current;
    var forecast = result.data.forecast.forecastday;

    const forecastDay = forecast.map((obj, key) => {
      const date = new Date();
      date.setTime(obj.date_epoch * 1000);

      return {
        dayOfWeek: getDayOfWeek(obj.date_epoch, 'short'),
        icon: obj.day.condition.icon,
        maxtemp_c: Math.round(obj.day.maxtemp_c) + '°',
        maxtemp_f: Math.round(obj.day.maxtemp_f) + '°',
        mintemp_c: Math.round(obj.day.mintemp_c) + '°',
        mintemp_f: Math.round(obj.day.mintemp_f) + '°',
        route: getDayOfWeek(obj.date_epoch),
        details: {
          date: obj.date,
          dayOfWeek: getDayOfWeek(obj.date_epoch),
          description: obj.day.condition.text,
          avghumidity: obj.day.avghumidity + '%',
          avgtemp_c: Math.round(obj.day.avgtemp_c) + '°',
          avgtemp_f: Math.round(obj.day.avgtemp_f) + '°',
          date_us: date.toLocaleDateString('en-US'),
          date_br: date.toLocaleDateString('pt-BR'),
        }
      };
    });

    const localtime = new Date().toLocaleString("en-US", {
      timeZone: location.tz_id,
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
    location = {
      name: location.name + ', ' + location.region + ' — ' + location.country,
      localtime: getDayOfWeek(location.localtime_epoch) + ' — ' + localtime,
    }

    current = {
      condition: {
        icon: current.condition.icon,
        text: current.condition.text,
      },
      temp_c: Math.round(current.temp_c),
      temp_f: Math.round(current.temp_f),
      precipitation: Math.round(current.precip_mm) + '%',
      humidity: Math.round(current.humidity) + '%',
      wind_kph: Math.round(current.wind_kph) + ' km/h',
      wind_mph: Math.round(current.wind_mph) + ' mph',
    }

    return {
      location: location,
      current: current,
      forecast: forecastDay,
    }
  });
}