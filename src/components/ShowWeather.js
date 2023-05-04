function ShowWeather({ currentWeatherData }) {
  if (currentWeatherData === undefined) {
    return;
  } else {
    const feelLikeTemp = currentWeatherData['feelslike_c'];
    const temp = currentWeatherData['temp_c'];
    const weatherCondition = currentWeatherData['condition']['text'];
    const windKPH = currentWeatherData['wind_kph'];
    const windGustKPH = currentWeatherData['gust_kph'];
    const windDirection = currentWeatherData['wind_dir'];
    const uv = currentWeatherData['uv'];
    const precipitation = currentWeatherData['precip_mm'];
    return (
      <div className='current-weather-container'>
        <div className='weather-condition'>
          <h3>{weatherCondition}</h3>
        </div>
        <div className='box-containers'>
          <div className='temps-container'>
            <div className='temp-item'>{temp}°C</div>
            <div className='feelslike-item'>Feels Like {feelLikeTemp}°C</div>
          </div>
          <div className='grid-container'>
            <div className='precip-item'>Precip {precipitation}mm</div>
            <div className='wind-item'>
              {windKPH} km/h {windDirection}
            </div>
            <div className='uv-item'>UV {uv}</div>
            <div className='wind-gust-item'>Wind Gust {windGustKPH} km/h</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowWeather;
