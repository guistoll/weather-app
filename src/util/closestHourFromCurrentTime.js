// get closest hour in array from current hour
export default function closesHourFromCurrentTime() {
    const today = new Date();
    const hours = [0, 3, 6, 9, 12, 15, 18, 21], goal = today.getHours();

    var closest = hours.reduce(function(prev, curr) {
        return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
    });

    return closest;
}