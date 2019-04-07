// converts UNIX timestamp to day of week
export default function timestampToDayOfWeek(timestamp, type) {

  const days = type === 'short' ?
    ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    :
    ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const date = new Date();
  date.setTime(timestamp * 1000);
  const dayOfWeek = days[date.getDay()];

  return dayOfWeek;
}