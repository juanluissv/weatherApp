import React, { useState } from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Header from './components/Header.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About.jsx'
import City from './components/City.jsx'


function App() {

  const city1 = {
    min: 32,
    max: 35,
    img: "03n",
    id: 2172797,
    wind: 3.6,
    temp: 300.15,
    name: "Miami",
    weather: "Clouds",
    clouds: 40,
    latitud: -16.92,
    longitud: 145.77
  };
  const city2 = {
    min: 32,
    max: 35,
    img: "04n",
    id: 217279734,
    wind: 3.6,
    temp: 300.15,
    name: "Seattle",
    weather: "Clouds",
    clouds: 40,
    latitud: -16.92,
    longitud: 145.77
  };


  const [cities, setCities] = useState([city1, city2]);
  const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

  function onSearch(newcity) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${newcity}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((data) => {
        if(data.main !== undefined){
          const newcity = {
            min: Math.round(data.main.temp_min),
            max: Math.round(data.main.temp_max),
            img: data.weather[0].icon,
            id: data.id,
            wind: data.wind.speed,
            temp: data.main.temp,
            name: data.name,
            weather: data.weather[0].main,
            clouds: data.clouds.all,
            latitud: data.coord.lat,
            longitud: data.coord.lon
          };
          setCities(oldCities => [...oldCities, newcity]);
        } else {
          alert("City not found");
        }
      });
    }

    function onClose(id) {
      const newcities =  cities.filter(oldCities => oldCities.id !== id);
      setCities(oldCities => newcities);
    }

  return (
    <div className="App">  
      <Router>
        <Header onSearch={onSearch} />        
          <Route
              path='/'
              render={() => 
                <Cards 
                  cities={cities}
                  onClose={onClose}
                 />}
              exact
          />
          <Route
              path='/about'
              component={About}
          />
          <Route
            exact path='/city/:cityId'
            render={({match}) => 
              <City 
                city={cities.filter(c => c.id === parseInt(match.params.cityId))}
              />}
          />

      </Router>  
              
    </div>

    

  );
}

export default App;
