import axios from 'axios';
import apiKey from '../api/ApiKey';

export default function searchLocations(input) {
  const searchUrl = 'http://api.apixu.com/v1/search.json?key=' + apiKey + '&q=' + input;

  return axios.get(searchUrl).then(results => {
    const filteredSuggestions = [];

    results.data.map(obj => {
      // Filter our suggestions that don't contain the user's input
      if (obj.name.toLowerCase().indexOf(input.toLowerCase()) > -1) {
        const city = {
          name: obj.name,
          url: obj.url
        }
        filteredSuggestions.push(city);
      }
      return filteredSuggestions;
    });

    return filteredSuggestions;
  });
}