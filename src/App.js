import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function App() {
  function inputChange (e) {
    console.log(e.target.value)
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
        >
        </TextField>
        <br />
        <br />
        <Button variant='contained' color='Primary'>
          Check Weather
        </Button>
      </div> 
    </div>
  );
}

export default App;
