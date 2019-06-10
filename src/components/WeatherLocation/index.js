import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import transfromWeather from '../../services/transformWeather';
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

class WeatherLocation extends Component {

  constructor(props){
    super(props);
    const { city } = props;
    this.state = {
      city,
      data: null
    }
    this.handleUpdateClick();
  }

  componentDidMount(){

  }

  componentDidUpdate(prevProps, prevState){

  }

  handleUpdateClick = () =>{
    const apiWeather = getUrlWeatherByCity(this.state.city);
    fetch(apiWeather).then(resolve=>{
      return resolve.json();
    }).then(data=>{
      const newWeather = transfromWeather(data);
      this.setState({data:newWeather});
    });
  }

  render(){
    const { onWeatherLocationClick } = this.props;
    const { city, data } = this.state;
    return ( 
      <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city}/>
        { data ? 
          <WeatherData data={data}/> : 
          <CircularProgress sixe={50}/>
        }  
      </div>
    )
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func.isRequired
}

export default WeatherLocation;