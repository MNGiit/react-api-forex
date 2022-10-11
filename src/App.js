import { useState, useEffect } from "react";
import './App.css';
import Button from "./components/Button.js";
import Listquotes from "./components/Listquotes.js";

/* eslint-disable */
function App() {
  
  // state to hold listquotes data
  const [listquotes, setListquotes] = useState(null);
  const [exchange, setExchange] = useState(null);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'fdcdb4c2eemsh5983776a28bc1a4p105239jsn2eb859134b06',
      'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
    }
  };

  // const getListQuotes = async (searchTerm) => {
  //   const response = await fetch('https://currency-exchange.p.rapidapi.com/listquotes', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));

  //   const data = await response.json();
  //   setListquotes(data);
  //   console.log("data", data);
  //   console.log("listquotes", listquotes);
  // }

  const getListQuotes2 = async (searchTerm) => {
    try {
      const response = await fetch('https://currency-exchange.p.rapidapi.com/listquotes', options);
      const data = await response.json();
      setListquotes(data);
    } catch (error) {
      console.log(error);
    }
  }

  const getExchange = async (searchTerm) => {
    console.log("Getting exchange...")
    try {
      const response = await fetch("https://currency-exchange.p.rapidapi.com/exchange?to=AUD&from=USD&q=1.0", options);
      // const response = await fetch("https://currency-exchange.p.rapidapi.com/exchange?to=${to}&from=${from}&q=1.0", options);
      const data = await response.json();
      console.log("data", data);
      // setExchange(data);
    } catch (error) {
      console.log(error);
    }
  }
  // function to getForex
  // const getForex = async (searchTerm) => {
  //   try {
  //     // make fetch request and store response
  //     const response = await fetch(
  //       `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
  //     );

  //     // parse json into javascript object
  //     const data = await response.json();

  //     // set the forex state to the forex
  //     setForex(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  
  
  // fetch('https://currency-exchange.p.rapidapi.com/listquotes', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));



  return (
    <div className="App">
      <img src="https://www.profitf.com/wp-content/uploads/2015/01/Funny-forex-image-6.jpg"></img>
      <Button listquotes={getListQuotes2} getThis="Listquotes"/>
      <Listquotes listquotes={listquotes} getThis="Listquotes"/>
      <Button listquotes={getExchange}/>
      <Listquotes listquotes={exchange}/>
    </div>
  );
}

export default App;
