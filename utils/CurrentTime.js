const getCurrentTime = () => {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let amOrPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; 
  minutes = (minutes < 10 ? "0" : "") + minutes;
  return hours + ":" + minutes + " " + amOrPm;
}
export default getCurrentTime;