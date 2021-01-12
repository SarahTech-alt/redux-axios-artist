import React from 'react';
import ArtistListItem from '../ArtistListItem/ArtistListItem';

function ArtistList(props) {

  // Creates JSX for each artist in the array
  function createArtistList() {
    let artistListForDom = [];
    for (let i = 0; i < props.artistList.length; i += 1) {
      let artist = props.artistList[i];
      let artistRow = (
        <ArtistListItem
          key={i}
          refreshArtists={props.refreshArtists}
          artist={artist}
        />
      );
      artistListForDom.push(artistRow);
    }
    return artistListForDom;
  }

  // render!
  return (
    <div>
      <table>
        <tbody>{createArtistList()}</tbody>
      </table>
    </div>
  );
}

export default ArtistList;
