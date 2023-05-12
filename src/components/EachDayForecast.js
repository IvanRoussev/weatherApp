function EachDayForecast({ forecast }) {
  const day = forecast['day'];

  const date = forecast['date'];

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  //Convert from 2023-05-07 to May 7
  const dateObj = new Date(date);
  const month = monthNames[dateObj.getMonth()];
  const currentDay = dateObj.getDate();
  const currDate = `${month} ${currentDay}`;

  const condition = day['condition']['text'];

  const avgTemp = day['avgtemp_c'];
  const maxTemp = day['maxtemp_c'];
  const minTemp = day['mintemp_c'];
  const uv = day['uv'];

  const precip = day['totalprecip_mm'];
  const rainChance = day['daily_chance_of_rain'];
  const snowChance = day['daily_chance_of_snow'];

  const minWind = day['minwind_kph'];
  const maxWind = day['maxwind_kph'];

  return (
    <>
      <div className='each-day-container'>
        <div className='date'>{currDate}</div>
        <div>
          <h2 className='condition'>{condition}</h2>
          <h3 className='avg-temp'>{avgTemp}°C</h3>
        </div>
        <div className='max-min-temp'>
          <div>↑ {maxTemp}°C</div>
          <div>↓ {minTemp}°C</div>
        </div>
      </div>
    </>
  );
}

export default EachDayForecast;
