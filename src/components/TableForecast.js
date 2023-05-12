function TableForecast({ forecast }) {
  return <div>Table Forecast</div>;
}

export default TableForecast;

//     <div className='table-forecast'>
//       <table>
//         <thead>
//           <tr className='table-row'>
//             <th>Date</th>
//             <th>{day1['date']}</th>
//             <th>{day2['date']}</th>
//             <th>{day3['date']}</th>
//             <th>{day4['date']}</th>
//             <th>{day5['date']}</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr className='table-row'>
//             <th>Weather Condition</th>
//             <td>{day1['day']['condition']['text']}</td>
//             <td>{day2['day']['condition']['text']}</td>
//             <td>{day3['day']['condition']['text']}</td>
//             <td>{day4['day']['condition']['text']}</td>
//             <td>{day5['day']['condition']['text']}</td>
//           </tr>
//           <tr className='table-row'>
//             <th>Avg Temp (Celcius °C)</th>
//             <td>{day1['day']['avgtemp_c']}°C</td>
//             <td>{day2['day']['avgtemp_c']}°C</td>
//             <td>{day3['day']['avgtemp_c']}°C</td>
//             <td>{day4['day']['avgtemp_c']}°C</td>
//             <td>{day5['day']['avgtemp_c']}°C</td>
//           </tr>
//           <tr className='table-row'>
//             <th>Max Temp (Celcius °C)</th>
//             <td>{day1['day']['maxtemp_c']}°C</td>
//             <td>{day2['day']['maxtemp_c']}°C</td>
//             <td>{day3['day']['maxtemp_c']}°C</td>
//             <td>{day4['day']['maxtemp_c']}°C</td>
//             <td>{day5['day']['maxtemp_c']}°C</td>
//           </tr>
//           <tr className='table-row'>
//             <th>Min Temp (Celcius°C)</th>
//             <td>{day1['day']['mintemp_c']}°C</td>
//             <td>{day2['day']['mintemp_c']}°C</td>
//             <td>{day3['day']['mintemp_c']}°C</td>
//             <td>{day4['day']['mintemp_c']}°C</td>
//             <td>{day5['day']['mintemp_c']}°C</td>
//           </tr>
//           <tr className='table-row'>
//             <th>UV Index</th>
//             <td>{day1['day']['uv']}</td>
//             <td>{day2['day']['uv']}</td>
//             <td>{day3['day']['uv']}</td>
//             <td>{day4['day']['uv']}</td>
//             <td>{day5['day']['uv']}</td>
//           </tr>
//           <tr className='table-row'>
//             <th>Wind</th>
//             <td>{day1['day']['maxwind_kph']} km/h</td>
//             <td>{day2['day']['maxwind_kph']} km/h</td>
//             <td>{day3['day']['maxwind_kph']} km/h</td>
//             <td>{day4['day']['maxwind_kph']} km/h</td>
//             <td>{day5['day']['maxwind_kph']} km/h</td>
//           </tr>
//           <tr className='table-row'>
//             <th>Chance of rain</th>
//             <td>{day1['day']['daily_chance_of_rain']}%</td>
//             <td>{day2['day']['daily_chance_of_rain']}%</td>
//             <td>{day3['day']['daily_chance_of_rain']}%</td>
//             <td>{day4['day']['daily_chance_of_rain']}%</td>
//             <td>{day5['day']['daily_chance_of_rain']}%</td>
//           </tr>
//           <tr className='table-row'>
//             <th>Precipitation (mm)</th>
//             <td>{day1['day']['maxwind_kph']} mm</td>
//             <td>{day2['day']['maxwind_kph']} mm</td>
//             <td>{day3['day']['maxwind_kph']} mm</td>
//             <td>{day4['day']['maxwind_kph']} mm</td>
//             <td>{day5['day']['maxwind_kph']} mm</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
