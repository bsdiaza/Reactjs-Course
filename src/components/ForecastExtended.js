import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';

/*const days = [
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes'
]

const data = {
  temperature: 10,
  humidity:12,
  weatherState: 'normal',
  wind: 'normal'
}*/
export const api_key = "629067db269602787ba26eb1403dbd2c";
export const url_base_weather = "http://api.openweathermap.org/data/2.5/forecast";


class ForecastExtended extends Component{
  constructor(){
    super();
    this.state= {forecastData:null};
  }
  componentDidMount(){
    const api_forecast = `${url_base_weather}?q=${this.props.city}&APPID=${api_key}`
    fetch(api_forecast).then(response =>
      (response.json())
    ).then(weather_data=>{
      console.log(weather_data)
    })
  }
  renderForecastItemDays(){
    return "Reder Items"
    //return days.map(day=>(<ForecastItem weekDay={day} key={day} hour={10} data={data}/>));
  }
  renderProgress(){
    return <h3> Cargando Pronostico Extendido ......</h3>
  }
  render(){
    const { city } = this.props;
    const { forecastData } = this.state;
    return(
      <div >
        <h2 className="forecast-title">Pronostico extendido para:{city}</h2>
        {forecastData ? 
          this.renderForecastItemDays():
          this.renderProgress()
        }
      </div>
    );
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired
}

export default ForecastExtended;