
import { useEffect, useState } from 'react';
import { Image } from 'semantic-ui-react';
import { Artist } from '../../../api';
import { Link } from 'react-router-dom';
import './AlbumInfo.scss';

export const AlbumInfo = ({album}) => {

    const { name, image, artist } = album;

    const [artistData, setArtistData] = useState(null);

    const artistObject = new Artist();
    const { getArtist } = artistObject;

    useEffect(() => {
        (async () => {
          try {
            const response = await getArtist(artist);
            setArtistData(response);
          } catch (error) {
            console.error(error);
          }
        })();
      }, [album]);

    return (
        <div className="album-info">
            <Image src={image} alt={name} />
            <div>
                <h1>{name}</h1>
                {artistData && (
                    <p>
                        Of <Link to={`/artists/${artist}`}>{artistData.name}</Link>
                    </p>
                )}
            </div>
        </div>
    )
}
