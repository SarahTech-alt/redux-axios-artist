import axios from 'axios';
import { useState } from 'react';

function AddArtist({refreshArtists}) {

    // created a new variable to hold
    // the inputted new artist name
    // set initially to an empty string
    const [newArtistName, setNewArtistName] = useState('');

    // when the form is submitted by button click
    // post the data to the server
    // then get the updated list of artists
const addNewArtist = event => {
    axios({
       method: 'POST',
       url:  '/artist',
    data: {
        name: newArtistName
    }
    }).then (response =>{
        refreshArtists();
    })
}

    return (
        <>
        {/* Created a form that calls addNewArtist on submit
        The value of the input is the newArtistName and is set when the input is changed */}
        <form onSubmit={addNewArtist}>
            <input type="text"
            placeholder="Artist name"
            onChange={(event) => setNewArtistName(event.target.value)}
            value = {newArtistName}/>
            <button type="submit">Add Artist</button>
        </form>
        
        </>
    );
}

export default AddArtist;