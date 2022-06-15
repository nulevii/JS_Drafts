function formatDuration(seconds) {
  if (seconds === 0) { return 'now'; }

  const year = Math.floor(seconds             / 365 / 24 / 60 / 60);
  const daysSeconds = (seconds - year         * 365 * 24 * 60 * 60);
  const day = Math.floor(daysSeconds          / 24 / 60 / 60);
  const hoursSeconds = (daysSeconds - day     * 24 * 60 * 60);
  const hour = Math.floor(hoursSeconds        / 60 / 60);
  const minutesSeconds = (hoursSeconds - hour * 60 * 60);
  const minute = Math.floor(minutesSeconds    / 60);
  const second = minutesSeconds - minute      * 60;

  const yearDimension = 'year';
  const dayDimension = 'day';
  const hourDimension = 'hour';
  const minuteDimension = 'minute';
  const secondDimension = 'second';

  const concatTime = (timeElement, dimension) => {
    switch (timeElement) {
      case 0: timeElement = '';
        break;
      case 1: return `${timeElement} ${dimension}, `;
      default:
        return `${timeElement} ${dimension}s, `;
    }
    return timeElement;
  };
  
  const years = concatTime(year, yearDimension);
  const days = concatTime(day, dayDimension);
  const hours = concatTime(hour, hourDimension);
  const minutes = concatTime(minute, minuteDimension);
  const resSeconds = concatTime(second, secondDimension);

  return `${years}${days}${hours}${minutes}${resSeconds}`.replace(/,\s$/, '').replace(/,\s(?=\d+[\D]*$)/, ' and ').replace(/,$/);
}

console.log(formatDuration((0111222221)));
