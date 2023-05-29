import React, { useEffect, useState } from 'react'
import { Artist } from '../../api';
import { ListArtists } from '../../components/Artist/ListArtists';
import "./ArtistsPage.scss";

export const ArtistsPage = () => {

    const [artists, setArtists] = useState([]);

    const artist = new Artist();
    const { obtainAll } = artist;

    useEffect(() => {
      (async () => {
        try {
          const response = await obtainAll();
          console.log(response)
          setArtists(response);
        } catch (error) {
          console.error(error);
        }
      })();
    }, []);
  
    return (
      <div className="artists-page">
        <h1>Artistas</h1>
        <ListArtists artists={artists} />
      </div>
    );
}
