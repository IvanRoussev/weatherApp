function EachDayForecast({ forecast }) {
  const day = forecast['day'];

  const date = forecast['date'];
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
        <div className='date'>{date}</div>
        <div>
          <h2 className='condition'>{condition}</h2>
          <h3 className='avg-temp'>{avgTemp}°C</h3>
        </div>
      </div>
    </>
  );
}

export default EachDayForecast;
