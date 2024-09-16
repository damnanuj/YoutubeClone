export function calculateTheTimeGap(publishTime) {
  const publishDate = new Date(publishTime);
  const currentDate = new Date();

  const secondsGap = (currentDate.getTime() - publishDate.getTime()) / 1000;

  const secondsPerMinute = 60;
  const secondsPerHour = 60 * secondsPerMinute;
  const secondsPerDay = 24 * secondsPerHour;
  const secondsPerWeek = 7 * secondsPerDay;
  const secondsPerMonth = 30 * secondsPerDay; 
  const secondsPerYear = 365 * secondsPerDay; 

  if (secondsGap < secondsPerMinute) {
    return `${Math.floor(secondsGap)} seconds ago`;
  }
  if (secondsGap < secondsPerHour) {
    return `${Math.floor(secondsGap / secondsPerMinute)} minutes ago`;
  }
  if (secondsGap < secondsPerDay) {
    return `${Math.floor(secondsGap / secondsPerHour)} hours ago`;
  }
  if (secondsGap < secondsPerWeek) {
    return `${Math.floor(secondsGap / secondsPerDay)} days ago`;
  }
  if (secondsGap < secondsPerMonth) {
    return `${Math.floor(secondsGap / secondsPerWeek)} weeks ago`;
  }
  if (secondsGap < secondsPerYear) {
    return `${Math.floor(secondsGap / secondsPerMonth)} months ago`;
  }

  return `${Math.floor(secondsGap / secondsPerYear)} years ago`;
}
