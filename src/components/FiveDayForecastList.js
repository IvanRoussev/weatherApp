import EachDayForecast from './EachDayForecast';

function FiveDayForecastList({ forecast }) {
  const forecastList = forecast['forecastday'];

  const renderForecast = forecastList.map((dayForecast, index) => {
    return <EachDayForecast key={index} forecast={dayForecast} />;
  });

  return (
    <div className='fiveDayForecast-container'>
      <div className='five-day-forecast-container'>{renderForecast}</div>
    </div>
  );
}

export default FiveDayForecastList;
