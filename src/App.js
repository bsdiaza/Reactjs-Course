import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
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
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant="h5" color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}> 
            <LocationList 
              cities={cities} 
              onSelectedLocation={this.handleOnSelectionLocation}
            />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details"></div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
