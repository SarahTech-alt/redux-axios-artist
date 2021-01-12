import React from 'react';
import axios from 'axios';

function ArtistListItem(props) {

  const deleteArtist = () => {
    axios({
      method: 'DELETE',
      url: `/artist/${props.artist.id}`,
    })
    .then( response => { props.refreshArtists() })
    .catch( error => { console.log('error on delete: ', error) })
  }

  return (
    <tr>
      <td>{props.artist.name}</td>
      <td>
        <button onClick={deleteArtist}>DELETE</button>
      </td>
    </tr>
  );
}

export default ArtistListItem;
