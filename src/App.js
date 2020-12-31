import React, {useState} from 'react';

function App() {

    let [query,setQuery] = useState('');
    let [weather,setWeather] = useState({});

const apiKEY = "c0ede9b543400e46282bc7fce8f8563b";
const url = "http://api.openweathermap.org/data/2.5/weather?q="+ query +"&units=metric&APPID="+apiKEY;

const search = evt => {
  if(evt.key ==="Enter") {
      fetch(url).then(res => res.json()).then(result =>  {
          setWeather(result)
          setQuery('');
          console.log(result);

      });
  }
};

const dateBuilder = (d) => {
let  months = ["January","February","March","April","May","June","July","August","September","october","november","december"];
let days = ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];

let day = days[d.getDay()];
let date = d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();

return day + " " + date + " " + month + " " + year;
};

  return (
    <div className={(typeof weather.main != "undefined") ? (weather.main.temp > 16) ? "app warm"
    : "app cold" : "app cold"}>

<main>
  <div className="search-box" >
      <input className="search-bar" onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search} placeholder="Search" type="text" />
  </div>
    {(typeof weather.main != "undefined") ? (
    <div>


    <div className="location-box">
        <div className="location">{weather.name}, {weather.sys.country}</div>
        <div className="date">{dateBuilder(new Date())}</div>
    </div>
    <div className="weather-box">
        <div className="temp">{Math.round(weather.main.temp)}°c</div>
        <div className="weather">{weather.weather[0].main}</div>
    </div>
    </div>
    ) :('')}
</main>

    </div>
  );
}

export default App;
