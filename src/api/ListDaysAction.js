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

            if (closest === objHours) {
                const dayOfWeek = getDayOfWeek(obj.dt);
                const iconUrl = 'http://openweathermap.org/img/w/' + obj.weather[0].icon + '.png';

                days[dayOfWeek] = {
                    dayOfWeek: dayOfWeek,
                    temp_min: Math.round(obj.main.temp_min) + '°',
                    temp_max: Math.round(obj.main.temp_max) + '°',
                    icon: iconUrl,
                };

                arrDays.push(days[dayOfWeek]);                   
            }

            return arrDays;
        });

        return {
            cityName: cityName,
            days: arrDays,
        }
    });
}