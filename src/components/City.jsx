import React from 'react';
import './City.css';



const City = ({city}) => {
    const myimage2 = `http://openweathermap.org/img/wn/${city[0].img}@2x.png`

    return (
    <div>
        <div className="ciudad">
                <div className="container2">
                    <h2 className="cityName2">{city[0].name}</h2>
                    <div className="info">
                        <div>Temperature: {city[0].temp} ºC</div>
                        <div>Weather: {city[0].weather}</div>
                        <div>Wind: {city[0].wind} km/h</div>
                        <div>Clouds: {city[0].clouds}</div>
                        <div>Latitude: {city[0].latitud}º</div>
                        <div>Longitude: {city[0].longitud}º</div>
                        <div><img src={myimage2} alt="" className="cityimage2" /></div>                        
                    </div>
            </div>
        </div>
    </div>        
    )
}

export default City