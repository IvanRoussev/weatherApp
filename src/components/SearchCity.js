import { useState } from 'react';

function SearchCity({ fetchdata }) {
  const [city, setCity] = useState('');

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchdata(city, '5');
  };

  return (
    <div className='topnav'>
      <div className='header'>
        <h1 className='title'>The Weather</h1>
      </div>

      <div className='searchbar'>
        <form onSubmit={handleSubmit}>
          <input
            name='search'
            className='input'
            placeholder='Enter Location..'
            value={city}
            onChange={handleChange}
          />
          <button className='search-button' type='submit'>
            Search
          </button>
        </form>
      </div>

      <div className='container'>
        <h2 className='about'>About</h2>
        <h2 className='news'>News</h2>
        {/* <a
          className='github-icon'
          href='https://github.com/IvanRoussev/ExploreMovies'
          target='_blank'
        >
          <img src={github} />
        </a> */}
      </div>
    </div>
  );
}

export default SearchCity;
