import React from 'react';
// import {useState, useEffect} from "react";

function Listquotes ({ listquotes }) {
    /* eslint-disable */
    // const displayMovie = () =>{
    //     return(
    //         <div className="movieDisplay">
    //             <h1>{movie.Title}</h1>
    //             <h2>{movie.Genre}</h2>
    //             <img src={movie.Poster} alt={movie.Title} />
    //             <h2>{movie.Year}</h2>     
    //         </div>
    //     )
    // }

    // solution to rendering a null movie
    // I have my own solution inside MovieDisplay.js
    // This is the Per Scholas solution 
    // const loaded = () => {const loaded=()=>{
    //     return (
    //       <>
    //         <div className="container">
    //           <h1 className="title">{movie.Title}</h1>
    //           <h4>{movie.Year}</h4>
    //           <h4>Rated : {movie.Rated}</h4>
    //           <h4>{movie.Genre}</h4>
    //         </div>
      
    //         <div className="scrn">
      
    //         <img className="poster" src={movie.Poster} alt={movie.Title} />
    //         <h2 className="synopsis">{movie.Plot} </h2>
      
    //         </div>
    //         <h2>{movie.Actors}</h2>
         
    //         <h2 style={{color:"green"}}>Sold: ${movie.BoxOffice}</h2> 
    //       </>
    //     );
    //   }}
    const loading = () => {
        return <h1>Fetch not found. Try again.</h1>
    }
    //

    const displayQuotes = () => {
        listquotes.array.forEach(element => {
            (<p>{element}</p>)
        });
    }

    const loadedQuotes = () => {
        return(
            <div>
                <ul>
                    <li>{listquotes[0]}</li>
                    <li>{listquotes[1]}</li>
                    <li>{listquotes[2]}</li>
                    <li>{listquotes[3]}</li>
                    <li>{listquotes[4]}</li>
                    <li>{listquotes[5]}</li>
                    <li>{listquotes[6]}</li>
                    <li>{listquotes[7]}</li>
                    <li>{listquotes[8]}</li>
                    <li>{listquotes[9]}</li>
                    <li>{listquotes[10]}</li>
                    <li>{listquotes[11]}</li>
                    <li>{listquotes[12]}</li>
                    <li>{listquotes[13]}</li>
                    <li>{listquotes[14]}</li>
                    <li>{listquotes[15]}</li>
                    <li>{listquotes[16]}</li>
                    <li>{listquotes[17]}</li>
                    <li>{listquotes[18]}</li>
                </ul>
            </div>
        )
    }

    //The component must return some JSX
    return (
        // movie ? displayMovie() : null   // Own solution
        // movie ? loaded() : loading(); // Per Scholas
        <>
        {/* {props.getThis === "Listquotes" ? <h3>List should appear below this</h3> : <h3>Exchange should appear below this</h3>} */}
        {/* {console.log("getThis", getThis)} */}
        <h3></h3>
        {displayQuotes}
        {listquotes ? loadedQuotes() : null}
        <p>{listquotes ? console.log("first element of listquotes: ", listquotes[0]) : null}</p>

        </>
    );
};

export default Listquotes;