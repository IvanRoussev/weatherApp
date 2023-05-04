function ShowCityinfo({ cityData }) {
  console.log(cityData);

  if (cityData === '') {
    return;
  } else {
    return (
      <div>
        <h2 className='city-name'>
          {cityData.name}, {cityData.region}
        </h2>
        <h3 className='city-timestamp'>{cityData.localtime}</h3>
      </div>
    );
  }
}

export default ShowCityinfo;
