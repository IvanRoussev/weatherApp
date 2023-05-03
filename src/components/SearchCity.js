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
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter City:</label>
        <input className='input' value={city} onChange={handleChange} />
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchCity;
