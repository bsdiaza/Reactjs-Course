import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,co',
  'Lima,pe',
  'Madrid,es',
  'Ciudad de México,mx'
];

class App extends Component{
  handleOnSelectionLocation = city => {
    console.log("handleSelectionLocation" + city);
  }
  render(){
    return (
      <div className="App">
        <LocationList 
          cities={cities} 
          onSelectedLocation={this.handleOnSelectionLocation}
        />
      </div>
    );
  }
}

export default App;
