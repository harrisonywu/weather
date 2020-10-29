import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import key from './api/api.js';

// possibly add state to search as well

function App() {

  let city = '';

  function inputChange (e) {
    city = e.target.value;
  }

  function getWeather () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    .then(response => response.json())
    .then(data => console.log('Success : ', data))
    .catch(error => console.log('Error : ', error))
  }
  
  function handleEnter (e) {
    if (e.keyCode === 0) {
      getWeather(city)
    }
  }
  return (
    <div className="background">
      <div className="card">
        <h1>Hello!</h1>
        <TextField
          id='city'
          label='City'
          placeholder='Enter a city name'
          onChange={inputChange}
          onKeyPress={handleEnter}
        >
        </TextField>
        <br />
        <br />
        <Button variant='contained' color='default' onClick={() => getWeather(city)}>
          Check Weather
        </Button>
      </div> 
    </div>
  );
}

export default App;
