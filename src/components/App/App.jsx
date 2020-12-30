// App.js
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ArtistList from '../ArtistList/ArtistList';

class App extends Component {
  // TODO - remove this local state and replace with Redux state 
  state = {
    artists: [],
  }
  
  componentDidMount() { 
    this.refreshArtists();
  }

  // Keep this method in App, as it will be used by multiple components
  // You want to keep the code DRY (Don't Repeat Yourself!)
  // We'll look at another way to handle this with next week's topic Sagas.
  refreshArtists = () => {
    axios({
      method: 'GET',
      url: '/artist'
    }).then((response) => {
      // response.data is the array of artists
      console.log(response.data);
      // TODO - update this to dispatch to Redux
      this.setState({
        artists: response.data,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Famous Artists</h1>
        </header>
        <p>Welcome to our collection of amazing artists!</p>
        <br/>
        <ArtistList refreshArtists={this.refreshArtists} artistList={this.state.artists} />
      </div>
    );
  }
}

export default App;
