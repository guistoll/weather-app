// converts UNIX timestamp to day of week
export default function timestampToDayOfWeek(timestamp) {
    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const date = new Date();
    date.setTime(timestamp * 1000);
    const dayOfWeek = days[date.getDay()];

    return dayOfWeek;
}