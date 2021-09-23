// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import ArtistList from '../ArtistList/ArtistList';
import { useDispatch } from 'react-redux';
import AddArtist from '../AddArtist/AddArtist';

function App() {
  // TODO - remove this local state and replace with Redux state 
  let [artists, setArtists] = useState([]);

  const dispatch = useDispatch();
    
  // get Artists data from server on load
  useEffect(() => {
    console.log('in useEffect');
    refreshArtists();
  }, []);

  // Initiate a variable to access dispatch
  // from react-redux
  // Keep this method in App, as it will be used by multiple components
  // You want to keep the code DRY (Don't Repeat Yourself!)
  // We'll look at another way to handle this with next week's topic Sagas.
  function refreshArtists() {
    axios({
      method: 'GET',
      url: '/artist'
    }).then( response => {
      // response.data is the array of artists
      console.log(response.data);
      dispatch({
        type: 'SET_ARTIST_LIST', payload: response.data,
       })
      setArtists(response.data)
    }).catch( error => {
      console.log('error on GET', error);
    });
  }

 
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Famous Artists</h1>
        </header>
        <p>{JSON.stringify(artists)}</p>
        <p>Welcome to our collection of amazing artists!</p>
        
        <br/>

        <ArtistList refreshArtists ={ refreshArtists }/>
        <AddArtist />
        
      </div>
    );
 
}

export default App;
