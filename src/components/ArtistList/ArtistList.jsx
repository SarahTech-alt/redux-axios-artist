import React from 'react';
import ArtistListItem from '../ArtistListItem/ArtistListItem';
import {useSelector} from 'react-redux'

function ArtistList(refreshArtists) {

  const artistList = useSelector(store => store.artistReducer);

  // Creates JSX for each artist in the array
  function createArtistList() {
    let artistListForDom = [];
    for (let i = 0; i < artistList.length; i += 1) {
      let artist = artistList[i];
      let artistRow = (
        <ArtistListItem
          key={i}
          refreshArtists={refreshArtists}
          artist={artist}
        />
      );
      artistListForDom.push(artistRow);
    }
    return artistListForDom;
  }

  // render!
  return (
    <>
   
    <div>
      <table>
        <tbody>{createArtistList()}</tbody>
      </table>
    </div>
    </>
  );
}

export default ArtistList;
