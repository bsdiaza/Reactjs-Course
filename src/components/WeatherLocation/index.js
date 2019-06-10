import React, { Component } from 'react';
import transfromWeather from '../../services/transformWeather';
import { api_weather } from '../../constants/api_url';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

class WeatherLocation extends Component {

  constructor(){
    super();
    this.state = {
      city: "Bogota",
      data: null
    }
    this.handleUpdateClick();
  }

  componentDidMount(){

  }

  componentDidUpdate(prevProps, prevState){

  }

  handleUpdateClick = () =>{
    fetch(api_weather).then(resolve=>{
      return resolve.json();
    }).then(data=>{
      const newWeather = transfromWeather(data);
      this.setState({data:newWeather});
    });
  }

  render(){
    const { city, data } = this.state;
    return ( 
      <div className="weatherLocationCont">
        <Location city={city}/>
        { data ? <WeatherData data={data}/> : "Cargando...." }  
      </div>
    )
  }
}

export default WeatherLocation;