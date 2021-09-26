import React, { useState, useEffect } from 'react';
import './App.css';
import Weather from './Weather';

function App() {

  const [cordinate, setCordinates] = useState({
    lat: 0.00,
    long: 0.00
  });

  const [data, setData] = useState({});

  function updatelocation(){
    navigator.geolocation.getCurrentPosition(function(position){//fuction(position) is a callback function and gets executed when getCurrentPosition returns the user location. After getting the positions this callback functions sets the lat and long in the state.
      setCordinates({...cordinate, lat: position.coords.latitude, long:position.coords.longitude});
    });
  }

  //getCurrentPosition() is a function which gives user current location.
  //navigator.geolocation is an object which is used to get geolocation API.
  useEffect(() => {
   
    const fetchData = async() =>{
      
      //fetch call to get the data from the API
      if(cordinate.lat !== 0.00 && cordinate.long !== 0.00){
        await fetch(`${process.env.REACT_APP_API_URL}/weather?lat=${cordinate.lat}&lon=${cordinate.long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setData(result)
          console.log(result);
        });
      }
    }

    fetchData();

  },[cordinate]);


  return (
    <div>
      <button onClick = { updatelocation }>weather</button>
      {(typeof data.main != 'undefined') ? (
        <Weather weatherDetails={data}/>
      ): (
        <div></div>
      )}
    </div>
  );
}

export default App;
